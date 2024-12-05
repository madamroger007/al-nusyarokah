import { getGaleriById } from '@/lib/prismaFunctions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { id } = params;

  const galeri = await getGaleriById(id);

  if (!galeri) {
    return NextResponse.json({ error: 'galeri not found' }, { status: 404 });
  }

  return NextResponse.json(galeri, {
    status: 200,
  });
}
