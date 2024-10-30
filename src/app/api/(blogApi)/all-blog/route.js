import { NextResponse } from 'next/server';
import Blog from '../../../models/Blogs';
import sequelize from '../../../../utils/sequelize';
sequelize.sync();

export async function GET() {
  try {
    const activeBlogs = await Blog.findAll({
      where: { is_active: 1 },
      order: [['createdAt', 'DESC']], 
    });
    const blogsList = activeBlogs.map(item => ({
      ...item.toJSON(), 
      blog_image: item.blog_image || '/images/blog/blog-01b.jpg', 
      display_updated_date: formatDate(item.updatedAt) 
    }));
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

