import MenuItem from '../../models/MenuItem'; 
import { NextResponse } from 'next/server';
export async function GET() {
  try {
    const menuItems = await MenuItem.findAll();
    return NextResponse.json(menuItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu items" },
      { status: 500 }
    );
  }
}


export async function POST(req) {
  try {
    const { menuName, menuUrl, parentMenuId } = await req.json();
    const newMenuItem = await MenuItem.create({
      name: menuName,
      url: menuUrl,
      parent_id: parentMenuId || null,
    });
    return NextResponse.json(
      { message: "Menu item added successfully", menuItem: newMenuItem },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding menu item:", error);
    return NextResponse.json(
      { error: "Failed to add menu item" },
      { status: 500 }
    );
  }
}