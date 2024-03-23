import React, { Suspense } from "react";
import { products } from "@/utils/data";

import Product from "./Product";
import { cn } from "./helpers";
import { resolve } from "path";
import { fetchFeaturedProducts } from "@/libs/httpcalls";
import { ProductType } from "@/libs/types";

type Props = {
  fProductsText: string;
  className?: string;
  pclassName?: string;
};

const FeaturedProducts = async ({
  fProductsText,
  className,
  pclassName,
}: Props) => {
  const allProducts: ProductType[] = await fetchFeaturedProducts();

  return (
    <div className={`${cn("mb", pclassName)}`}>
      <h1 className="sub__section">{fProductsText}</h1>

      <div className={`${cn("scenter2 prXl:gap-[2rem]", className)}`}>
        {allProducts.map((product) => {
          const { productName, _id, productImage, price } = product;

          return (
            <Suspense key={_id} fallback={<h1>featured products</h1>}>
              <Product
                key={_id}
                productName={productName}
                price={price}
                id={_id}
                productImage={productImage}
                className={{
                  img: "h-[30rem] prXl:h-[26rem] prLg:h-[19rem] prMd:h-[16rem] prSm:h-[28rem]",
                }}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
