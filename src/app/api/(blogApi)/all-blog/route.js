import { NextResponse } from 'next/server';
import Blog from '../../../models/Blogs';
import sequelize from '../../../../utils/sequelize';

// Ensure the database is synced
sequelize.sync();

// Handler for GET request to fetch all active blogs
export async function GET() {
  try {
    // Fetch all blogs with is_active = 1 from the database
    const activeBlogs = await Blog.findAll({
      where: { is_active: 1 },  // Filter to get only active blogs
      order: [['createdAt', 'DESC']], // Optional: Order by created date, most recent first
    });

    // Map through the results and set a dummy image if blog_image is empty
    const blogsList = activeBlogs.map(item => ({
      ...item.toJSON(), // Convert Sequelize instance to plain object
      blog_image: item.blog_image || '/images/blog/blog-01b.jpg', // Dummy image URL
      display_updated_date: formatDate(item.updatedAt) // Format updatedAt
    }));

    // Return the active blogs as a JSON response
    return NextResponse.json(blogsList, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}



// Function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

