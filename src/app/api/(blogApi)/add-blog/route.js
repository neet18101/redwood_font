import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import Blog from "../../../models/Blogs";
import sequelize from "../../../../utils/sequelize";
sequelize.sync();

export async function POST(req) {
  try {
    // Parse the FormData
    const data = await req.formData();

    // Prepare the uploads directory
    const uploadsDir = path.resolve("./public/blog_image");
    await mkdir(uploadsDir, { recursive: true });

    let singleFilePath = null;
    const singleFile = data.get("blog_image");

    // Handle file upload
    if (singleFile) {
      const singleFileBuffer = Buffer.from(await singleFile.arrayBuffer());
      singleFilePath = path.join(uploadsDir, singleFile.name);
      await writeFile(singleFilePath, singleFileBuffer);
      singleFilePath = `/blog_image/${singleFile.name}`; // Path to store in DB
    }

    // Extract form data fields
    const title = data.get("title");
    const slug = data.get("slug");
    const content = data.get("content");
    const categoryId = data.get("categoryId") || null;

    // Basic validation
    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: "Title, slug, and content are required." },
        { status: 400 }
      );
    }

    // Check for duplicate slugs
    const existingBlog = await Blog.findOne({ where: { slug } });
    if (existingBlog) {
      return NextResponse.json(
        { message: "Slug already exists." },
        { status: 400 }
      );
    }

    // Create the new blog post
    const newBlog = await Blog.create({
      title,
      slug,
      content,
      categoryId,
      blog_image: singleFilePath, // Save the image path if it exists
    });

    // Respond with success
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
