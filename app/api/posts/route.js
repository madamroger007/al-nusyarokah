import { getAllPosts } from '@/lib/prismaFunctions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const posts = await getAllPosts();

  if (!posts) {
    return NextResponse.json({ error: 'No posts found' }, { status: 404 });
  }

  return NextResponse.json(posts, {
    status: 200,
  });
}
