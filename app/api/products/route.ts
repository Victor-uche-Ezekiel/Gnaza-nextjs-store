import { A, B, E, N, R } from "@/libs/helpers";
import connectMongoDB from "@/libs/mongodb";
import ProductSchema from "@/mongoDbModels/products";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, res: NextApiResponse) {
  const { productName, productImage, price, category, featured } =
    await request.json();

  await connectMongoDB();
  await ProductSchema.create({
    productName,
    productImage,
    price,
    category,
    featured,
  });
  res.revalidate("/store?page=6");

  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") || 1;
  const newPageValue = Number(page);
  const productsPerPage = 6;
  let getSorted = {};
  let findProducts;

  // search params
  const msg = request.nextUrl.searchParams.get("msg");
  const n = request.nextUrl.searchParams.get("n");
  const e = request.nextUrl.searchParams.get("e");
  const r = request.nextUrl.searchParams.get("r");
  const b = request.nextUrl.searchParams.get("b");
  const a = request.nextUrl.searchParams.get("a");
  const sort = request.nextUrl.searchParams.get("sort");

  if (sort === "minprice") getSorted = { price: 1 };
  else if (sort === "maxprice") getSorted = { price: -1 };
  else if (sort === "a-z") getSorted = { productName: 1 };
  else if (sort === "z-a") getSorted = { productName: -1 };

  if (e === E || n === N || r === R || b === B || a === A) {
    findProducts = {
      $or: [
        { category: n },
        { category: e },
        { category: r },
        { category: b },
        { category: a },
      ],
    };
  } else {
    findProducts = {};
  }

  if ("see" === "see") {
    await connectMongoDB();
    const products = await ProductSchema.find(findProducts)
      .skip((newPageValue - 1) * productsPerPage)
      .limit(productsPerPage)
      .sort(getSorted);
    if (msg === "addParams") return NextResponse.json([]);
    return NextResponse.json(products);
  }

  await connectMongoDB();
  const products = await ProductSchema.find(findProducts)
    // .skip((newPageValue - 1) * productsPerPage)
    // .limit(productsPerPage)
    .sort(getSorted);
  if (msg === "addParams") return NextResponse.json([]);
  return NextResponse.json(products);
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ProductSchema.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
}
