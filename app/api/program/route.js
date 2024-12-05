import { getAllProgram } from '@/lib/prismaFunctions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const program = await getAllProgram();

  if (!program) {
    return NextResponse.json({ error: 'No program found' }, { status: 404 });
  }

  return NextResponse.json(program, {
    status: 200,
  });
}
