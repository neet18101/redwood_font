import { NextResponse } from "next/server";
import Blog from "../../../models/Blogs";
import sequelize from "../../../../utils/sequelize";
sequelize.sync();

export async function POST(req) {
  const { title, slug, content, categoryId } = await req.json();

  try {
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
      categoryId: categoryId || null,
    });

    // Respond with success
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
