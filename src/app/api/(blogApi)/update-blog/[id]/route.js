import { NextResponse } from "next/server";
import Blog from "@/app/models/Blogs";
import sequelize from "../../../../../utils/sequelize";
import toast from "react-hot-toast";
sequelize.sync();
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const blog = await Blog.findByPk(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found." }, { status: 404 });
    }

    // Respond with the blog data
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
export async function PATCH(request, { params }) {
  const { id } = params;

  try {
    // Parse the form data
    const formData = await request.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const categoryId = formData.get("categoryId");
    const content = formData.get("content");
    const blogImage = formData.get("blog_image");
    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: "Please provide all required fields." },
        { status: 400 }
      );
    }

    const blog = await Blog.findByPk(id);
    if (!blog) {
      return NextResponse.json(
        { message: "Blog post not found." },
        { status: 404 }
      );
    }
    blog.title = title;
    blog.slug = slug;
    blog.categoryId = categoryId;
    blog.content = content;
    if (blogImage) {
      const imagePath = `/uploads/${blogImage.name}`;

      // blog.imageUrl = imagePath; // Assuming 'imageUrl' is a field in your Blog model
    }

    // Save the updated blog
    await blog.save();

    return NextResponse.json(
      { message: "Blog post updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { message: "An error occurred while updating the blog post." },
      { status: 500 }
    );
  }
}


