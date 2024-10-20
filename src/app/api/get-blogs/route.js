
import { NextResponse } from "next/server";
import Blogs from "../../models/Blogs";

// import MenuItem from '../../models/MenuItem'; 

export async function GET() {
  try {
    // Fetch all blog entries from the database
    const allItems = await Blogs.findAll();

    // Log the result for debugging
    console.log('allItems:', allItems);

    // Convert the Sequelize result to a plain JavaScript array
    const plainItems = allItems.map(item => item.get({ plain: true }));

    // Return the items as a JSON response
    return NextResponse.json(plainItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
