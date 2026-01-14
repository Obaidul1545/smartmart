import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

// GET single product
export async function GET(req, { params }) {
  try {
    const collection = await dbConnect('products');

    const product = await collection.findOne({
      _id: new ObjectId(params.id),
    });

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid product ID' },
      { status: 400 }
    );
  }
}
