// app/api/content/[id]/route.js
import { NextResponse } from "next/server";
import MenuContent from "../../../../models/AddContent";
export async function GET(request, { params }) {
  const { id } = params;
  try {
    const content = await MenuContent.findByPk(id); 

    if (!content) {
      return NextResponse.json({ success: false, message: "Content not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: content }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving content:", error);
    return NextResponse.json({ success: false, error: "Error retrieving content" }, { status: 500 });
  }
}
