import { NextResponse } from "next/server";
import MenuItem from "../../models/MenuItem";
export async function GET() {
    try {
        // Fetch all blog entries from the database
        const allItems = await MenuItem.findAll();
        // Convert the Sequelize result to a plain JavaScript array and format the date

        const plainItems = allItems.map(item => {
            // const plainItems = filteredMenus.map(item => {
            const menuItem = item.get({ plain: true });
            // Format the date
            menuItem.formattedDate = formatDate(menuItem.created_at); // Assuming the date field is named 'date'
            return menuItem;
        });

        // Step 1: Create a mapping of parent IDs to names
        const parentMapping = plainItems.reduce((acc, item) => {
            if (item.parent_id === null) {
                acc[item.id] = item.name;
            }
            return acc;
        }, {});

        // Step 2: Add the parent_name to each submenu
        const updatedMenus = plainItems.map(item => ({
            ...item,
            parent_name: item.parent_id ? parentMapping[item.parent_id] : null
        }));

        // Step 3: Create a Set of parent IDs to filter out
        const parentIds = new Set(plainItems
            .filter(item => item.parent_id !== null) // Only include items with a parent
            .map(item => item.parent_id) // Extract parent IDs
        );

        // Step 4: Filter out parent items
        const filteredMenus = updatedMenus.filter(item => !parentIds.has(item.id));

        // Return the items as a JSON response
        return NextResponse.json(filteredMenus, { status: 200 });
    } catch (error) {
        console.error("Error fetching menuItem:", error);
        return NextResponse.json(
            { error: "Failed to fetch menuItem" },
            { status: 500 }
        );
    }
}

function formatDate(dateString) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(',', '');
}


// Delete a blog by ID
export async function DELETE(request) {
    try {
        const { id } = await request.json(); // Get the ID from the request body
        const deletedItem = await MenuItem.destroy({ where: { id } });
        if (!deletedItem) {
            return NextResponse.json({ error: "Menu not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Menu deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting menu:", error);
        return NextResponse.json({ error: "Failed to delete Menu" }, { status: 500 });
    }
}