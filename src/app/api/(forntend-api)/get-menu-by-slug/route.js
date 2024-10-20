import { NextResponse } from "next/server";
import MenuItem from "../../../models/MenuItem";
import MenuContent from "../../../models/AddContent";
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (!slug) {
      return NextResponse.json({ error: "Slug parameter is required" }, { status: 400 });
    }
    const slugSegments = slug.replace(/^\/|\/$/g, "").split("/");
    if (slugSegments.length === 0) {
      return NextResponse.json({ error: "Invalid slug format" }, { status: 400 });
    }
    const queryOptions = {
      include: [
        {
          model: MenuItem,
          as: "menu",
          where: { url: slugSegments[0] },
        },
      ],
    };
    if (slugSegments.length > 1) {
      queryOptions.include[0].include = [
        {
          model: MenuItem,
          as: "subMenu",
          where: { url: slugSegments[1] }, // Match the second segment with the submenu
        },
      ];
    }
    // Query the content based on the slug
    const content = await MenuContent.findAll(queryOptions);

    if (!content || content.length === 0) {
      return NextResponse.json({ message: "No content found for the provided slug" }, { status: 404 });
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.error("Error fetching content by slug:", error);
    return NextResponse.json({ error: "Failed to fetch content by slug" }, { status: 500 });
  }
}
