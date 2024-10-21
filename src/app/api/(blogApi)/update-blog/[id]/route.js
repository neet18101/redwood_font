import { NextResponse } from "next/server";
import Blog from "@/app/models/Blogs";
import sequelize from "../../../../../utils/sequelize";
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
export async function PATCH(req) {
  // Parse the request URL to get query parameters
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id"); // Get the 'id' query parameter

  console.log("ID received from query parameters:", id); // Log the received ID for debugging

  return new Promise((resolve, reject) => {
    const dataToUpdate = {
      is_active: 2,
      ...req.body,
    };

    Blog.update(dataToUpdate, {
      where: { id },
    })
      .then(([affectedCount]) => {
        console.log("Affected rows count:", affectedCount);
        if (affectedCount === 0) {
          return reject(
            NextResponse.json({ message: "Blog not found" }, { status: 404 })
          );
        }
        resolve(NextResponse.json({ message: "Blog updated successfully" }));
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        reject(NextResponse.json({ message: "Server error" }, { status: 500 }));
      });
  });
}
