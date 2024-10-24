import { NextResponse } from 'next/server';
import Blog from '../../../models/Blogs';
import sequelize from '../../../../utils/sequelize';

// Ensure the database is synced
sequelize.sync();

// Handler for GET request to fetch all active blogs
export async function GET(req) {
    const { searchParams } = req.nextUrl;
    const slug = searchParams.get('slug'); // Get the slug from query parameters
    return getBlogBySlug(slug);
}



// Function to fetch a blog by slug
const getBlogBySlug = async (slug) => {
    try {
        const blog = await Blog.findOne({
            where: { slug, is_active: 1 }, // Ensure the blog is active
        });

        if (!blog) {
            return NextResponse.json(
                { message: 'Blog not found' },
                { status: 404 }
            );
        }

        const blogData = {
            ...blog.toJSON(),
            blog_image: blog.blog_image || '/images/bg/titlebar-img.jpg', // Dummy image URL
            display_updated_date: formatDate(blog.updatedAt) // Format updatedAt
        };

        return NextResponse.json(blogData, { status: 200 });
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return NextResponse.json(
            { message: 'Failed to fetch blog' },
            { status: 500 }
        );
    }
}


// Function to format date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};


