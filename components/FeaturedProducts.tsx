import React from "react";
import { products } from "@/utils/data";

import Product from "./Product";
import { cn } from "./helpers";
import { client } from "@/app/lib/sanity";
import { SingleProduct } from "@/app/lib/types";

type Props = {
  fProductsText: string;
  className?: string;
  pclassName?: string;
};

const fetchAllProducts = async () => {
  const query = `*[featuredProduct == 'featured'] {
  productImage,title,price,slug
}
  `;

  const data = await client.fetch(query);

  return data;
};

const FeaturedProducts = async ({
  fProductsText,
  className,
  pclassName,
}: Props) => {
  const allProducts: SingleProduct[] = await fetchAllProducts();
  return (
    <div className={`${cn("mb", pclassName)}`}>
      <h1 className="sub__section">{fProductsText}</h1>

      <div className={`${cn("scenter2 prXl:gap-[2rem]", className)}`}>
        {allProducts.map((product, id) => {
          const { title, slug, productImage, price } = product;
          return (
            <Product
              key={slug.current}
              name={title}
              price={price}
              slug={slug.current}
              productImage={productImage}
              className={{
                img: "h-[30rem] prXl:h-[26rem] prLg:h-[19rem] prMd:h-[16rem] prSm:h-[28rem]",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
