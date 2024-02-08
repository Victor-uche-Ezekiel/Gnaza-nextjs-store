import connectMongoDB from "@/libs/mongodb";
import ProductSchema from "@/mongoDbModels/products";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const { id } = await params;
  await connectMongoDB();
  const products = await ProductSchema.aggregate([
    { $match: { _id: new ObjectId(id) } },
    { $sample: { size: 1 } },
  ]);

  // const product = await ProductSchema.findOne({ _id: new ObjectId(id) });

  return NextResponse.json(products);
}
