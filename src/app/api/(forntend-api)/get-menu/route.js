import { NextResponse } from "next/server";
import MenuItem from "../../../models/MenuItem";

export async function GET() {
  try {
    const menuItems = await MenuItem.findAll({
      attributes: ["id", "name", "url", "parent_id"],
    });

    // Convert the Sequelize result to a plain JavaScript array
    const menuHierarchy = buildMenuHierarchy(menuItems.map(item => item.get({ plain: true })));

    return NextResponse.json(menuHierarchy, { status: 200 });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu items" },
      { status: 500 }
    );
  }
}
function buildMenuHierarchy(menuItems) {
  const menuMap = new Map();
  menuItems.forEach((item) => {
    menuMap.set(item.id, {
      id: item.id,
      name: item.name,
      url: item.url,
      subMenus: [],
    });
  });

  const rootMenus = [];
  menuItems.forEach((item) => {
    if (item.parent_id) {
      const parentMenu = menuMap.get(item.parent_id);
      if (parentMenu) {
        const fullUrl = `/${parentMenu.url}/${item.url}`;
        menuMap.set(item.id, { ...menuMap.get(item.id), url: fullUrl });
        parentMenu.subMenus.push(menuMap.get(item.id));
      }
    } else {
      rootMenus.push(menuMap.get(item.id));
    }
  });
  return rootMenus;
}
