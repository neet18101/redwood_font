import { NextResponse } from 'next/server';
import Blog from '../../../models/Blogs'

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  try {
    if (!slug) {
      return NextResponse.json({ message: 'Slug is required.' }, { status: 400 });
    }
    const blogPost = await Blog.findOne({ where: { slug } });
    if (!blogPost) {
      return NextResponse.json({ message: 'Blog post not found.' }, { status: 404 });
    }
    return NextResponse.json(blogPost, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
