import { getAllGaleri } from '@/lib/prismaFunctions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const galeri = await getAllGaleri();

  if (!galeri) {
    return NextResponse.json({ error: 'No Galeri found' }, { status: 404 });
  }

  return NextResponse.json(galeri, {
    status: 200,
  });
}
