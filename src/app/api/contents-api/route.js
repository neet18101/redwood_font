
import { NextResponse } from "next/server";
import MenuContent from "../../models/AddContent";
export async function GET() {
  try {
    // Fetch all blog entries from the database
    const allItems = await MenuContent.findAll(
        {
          where: { is_active: 1},
          order: [['created_at','DESC']]
        }
    );
    // Convert the Sequelize result to a plain JavaScript array and format the date
    const plainItems = allItems.map(item => {
      const blog = item.get({ plain: true });
      // Format the date
      blog.formattedDate = formatDate(blog.createdAt); // Assuming the date field is named 'date'
      return blog;
    });
    // Return the items as a JSON response
    return NextResponse.json(plainItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching service contents:", error);
    return NextResponse.json(
      { error: "Failed to fetch service contents" },
      { status: 500 }
    );
  }
}


// Delete a blog by ID
export async function DELETE(request) {
  try {
    const { id } = await request.json(); // Get the ID from the request body
    const deletedBlog = await MenuContent.destroy({ where: { id } });
    if (!deletedBlog) {
      return NextResponse.json({ error: "Service content not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Service content deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}




function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(dateString);

  return date.toLocaleDateString('en-GB', options).replace(',', '');
}