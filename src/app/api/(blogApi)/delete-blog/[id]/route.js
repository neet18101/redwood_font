import { NextResponse } from "next/server";
import Blog from "@/app/models/Blogs";
import sequelize from "../../../../../utils/sequelize";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    // Find the blog post by id
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return NextResponse.json(
        { message: "Blog post not found." },
        { status: 404 }
      );
    }
    await blog.destroy();

    return NextResponse.json(
      { message: "Blog post deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { message: "An error occurred while deleting the blog post." },
      { status: 500 }
    );
  }
}
