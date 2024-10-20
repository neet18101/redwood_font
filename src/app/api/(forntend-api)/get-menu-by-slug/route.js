import { NextResponse } from "next/server";
import MenuItem from "../../../models/MenuItem"; // Adjust path to your model
import MenuContent from "../../../models/AddContent"; // Adjust path to your model

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ message: "Slug is required." }, { status: 400 });
  }

  try {
    // Determine if slug is a menu or sub-item
    const isSubItem = slug.includes("/");
    let menuItem, menuContent;
    let responseContent = [];

    if (isSubItem) {
      const [menuSlug, subItemSlug] = slug.split("/");

      // Fetch the sub-item by slug
      menuItem = await MenuItem.findOne({
        where: {
          url: subItemSlug,
          is_active: "1",
        },
      });
      console.log(menuItem, "Item");

      if (menuItem) {
        menuContent = await MenuContent.findAll({
          where: {
            sub_menu_id: menuItem.id,
            menu_id: menuItem.parent_id,
            is_active: 1,
          },
        });
        console.log(menuContent, "content");

        if (menuContent.length > 0) {
          responseContent = menuContent; // Store content array in response
        }
      }
    } else {
      // Fetch the menu item by slug
      menuItem = await MenuItem.findOne({
        where: {
          url: slug,
          parent_id: null,
          is_active: "1",
        },
      });

      if (menuItem) {
        menuContent = await MenuContent.findAll({
          where: {
            menu_id: menuItem.id,
            sub_menu_id: 0,
            is_active: 1,
          },
        });

        if (menuContent.length > 0) {
          responseContent = menuContent;
        }
      }
    }
    if (responseContent.length == 0) {
      return NextResponse.json(
        { message: "Content not found." },
        { status: 404 }
      );
    } else {
      return NextResponse.json(responseContent, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
