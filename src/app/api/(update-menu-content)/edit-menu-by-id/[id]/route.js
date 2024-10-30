import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import MenuContent from "../../../../models/AddContent"; 
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const data = await req.formData();
    const uploadsDir = path.resolve("./public/uploads");
    await mkdir(uploadsDir, { recursive: true });
    let singleImagePath = null;
    const multipleImagePaths = [];
    const singleFile = data.get("singleFile");
    if (singleFile) {
      const singleFileBuffer = Buffer.from(await singleFile.arrayBuffer());
      const singleFilePath = path.join(uploadsDir, singleFile.name);
      await writeFile(singleFilePath, singleFileBuffer);
      singleImagePath = `/uploads/${singleFile.name}`;
    }
    for (const [key, value] of data.entries()) {
      if (key.startsWith("multipleFile")) {
        const fileBuffer = Buffer.from(await value.arrayBuffer());
        const filePath = path.join(uploadsDir, value.name);
        await writeFile(filePath, fileBuffer);
        multipleImagePaths.push(`/uploads/${value.name}`);
      }
    }
    const selectedMenu = data.get("selectedMenu");
    const selectedSubMenu = data.get("selectedSubMenu");
    const textAreaValue = data.get("textAreaValue");
    const title = data.get("title");
    const menuContent = await MenuContent.findByPk(id);
    if (!menuContent) {
      return NextResponse.json(
        { success: false, message: "Content not found" },
        { status: 404 }
      );
    }
    await menuContent.update({
      menu_id: selectedMenu,
      sub_menu_id: selectedSubMenu,
      title: title,
      content: textAreaValue,
      service_wallpaper: singleImagePath || menuContent.service_wallpaper, 
      service_slider: JSON.stringify(multipleImagePaths) || menuContent.service_slider,
    });

    return NextResponse.json(
      { success: true, message: "Content updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update content" },
      { status: 500 }
    );
  }
}
