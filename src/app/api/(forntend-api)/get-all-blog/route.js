import { NextResponse } from 'next/server';
import Blog from '../../../models/Blogs';

export async function GET(req) {
  try {
    // Retrieve all blog posts from the database
    const blogs = await Blog.findAll(); // Fetch all blog entries

    // Return the list of blogs
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
