import { url } from "@/libs/helpers";
import connectMongoDB from "@/libs/mongodb";
import ProductSchema from "@/mongoDbModels/products";
import { NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, res: NextApiResponse) {
  await connectMongoDB();
  const products = await ProductSchema.aggregate([
    // { $match: { price: 13000 } },
    { $sample: { size: 6 } },
  ]);

  return NextResponse.json(products);
}
