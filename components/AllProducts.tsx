import React from "react";
import { products } from "@/utils/data";

import Product from "./Product";
import Link from "next/link";

import Banner from "./Banner";
import { client } from "@/app/lib/sanity";
import { SingleProduct } from "@/app/lib/types";
import ProductsHeading from "./ProductsHeading";
import FiltersModal from "./FiltersModal";

const fetchAllProducts = async () => {
  const query = `*[_type == 'products'] | order(_createdAt desc) {
    productImage,
      title,
      price,
      slug
  }
  `;

  const data = await client.fetch(query);

  return data;
};

type Props = {
  // scenter: string;
};

const AllProducts = async ({}: Props) => {
  const allProducts: SingleProduct[] = await fetchAllProducts();

  return (
    <div className="mb">
      <div className="page-banner">
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li className="text-clr1">Products</li>
        </ul>
      </div>

      <Banner
        className={{
          img: "w-full h-[30vh] col-start-1 row-start-1 z-[-1]",
          btn: "hidden",
          mb: "mb-[5rem]",
        }}
      />

      <div className="page-banner">
        <h2>Products</h2>
      </div>

      <ProductsHeading />

      <div className="scenter flex gap-x-[3rem] hmXl:grid-cols-[1fr]">
        <FiltersModal />
        <div className={`scenter1 w-full prXl:gap-[2rem]`}>
          {allProducts.map((product, id) => {
            const { title, productImage, slug, price } = product;
            return (
              <Product
                key={slug.current}
                name={title}
                price={price}
                slug={slug.current}
                productImage={productImage}
                className={{
                  img: "h-[22rem] prXl:h-[26rem] prLg:h-[19rem] prMd:h-[16rem] prSm:h-[28rem]",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
