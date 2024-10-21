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

    // Return the active blogs as a JSON response
    return NextResponse.json(activeBlogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
