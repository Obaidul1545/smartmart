import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';

// GET
export async function GET() {
  try {
    const collection = await dbConnect('products');
    const products = await collection.find().toArray();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbConnect('products');

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Product added', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to add product' },
      { status: 500 }
    );
  }
}
