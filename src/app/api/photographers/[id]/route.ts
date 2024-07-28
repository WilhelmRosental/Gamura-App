import { NextResponse } from 'next/server';
import photographers from '../../../data/photographers.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const photographer = photographers.photographers.find((p) => p.id === id);
  
  if (photographer) {
    return NextResponse.json(photographer);
  } else {
    return NextResponse.json({ message: 'Photographer not found' }, { status: 404 });
  }
}