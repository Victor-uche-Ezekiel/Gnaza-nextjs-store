import { url } from "@/libs/helpers";
import connectMongoDB from "@/libs/mongodb";
import ProductSchema from "@/mongoDbModels/products";
import { NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: any, res: NextApiResponse) {
  await connectMongoDB();
  const products = await ProductSchema.aggregate([
    // { $match: { price: 13000 } },
    { $sample: { size: 6 } },
  ]);

  revalidatePath(`${url}/store`);

  return NextResponse.json(products);
}
