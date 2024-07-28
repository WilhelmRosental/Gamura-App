import { NextResponse } from 'next/server';
import photographers from '../../data/photographers.json';

export async function GET() {
  return NextResponse.json(photographers.photographers);
}