import { getBeritaById } from '@/lib/prismaFunctions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { id } = params;

  const berita = await getBeritaById(id);

  if (!berita) {
    return NextResponse.json({ error: 'berita not found' }, { status: 404 });
  }

  return NextResponse.json(berita, {
    status: 200,
  });
}
