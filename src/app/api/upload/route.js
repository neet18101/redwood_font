import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import MenuContent from "../../models/AddContent";
import toast from "react-hot-toast";
export async function POST(req) {
  try {
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
    const serviceSlider = JSON.stringify(multipleImagePaths);
    const subMenuExists = await MenuContent.findOne({
      where: {
        sub_menu_id: selectedSubMenu,
      },
    });
    if (subMenuExists) {
      toast.error("Sub Menu Already exists!")
      return NextResponse.json(
        {
          success: false,
          message: "Sub menu already exists",
        },
        { status: 400 }
      );
    }
    await MenuContent.create({
      menu_id: selectedMenu,
      title: title,
      sub_menu_id: selectedSubMenu,
      service_wallpaper: singleImagePath,
      content: textAreaValue,
      service_slider: serviceSlider,
      is_active: true,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Form data processed successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the form data:", error);
    return NextResponse.json(
      { error: "Failed to process the form data", success: false },
      { status: 500 }
    );
  }
}
