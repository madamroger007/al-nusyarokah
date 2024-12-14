import { getAllBerita } from '@/lib/prismaFunctions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const berita = await getAllBerita();

  if (!berita) {
    return NextResponse.json({ error: 'No berita found' }, { status: 404 });
  }

  return NextResponse.json(berita, {
    status: 200,
  });
}
