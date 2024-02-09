import React, { Suspense } from "react";
import { products } from "@/utils/data";

import Product from "./Product";
import { cn } from "./helpers";
import { SingleProduct } from "@/libs/types";
import { resolve } from "path";
import { api_url, fetchFeaturedProducts } from "@/libs/httpcalls";

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
  const allProducts: SingleProduct[] = await fetchFeaturedProducts();

  // return (
  //   <div className={`${cn("mb", pclassName)}`}>
  //     <h1 className="sub__section">{fProductsText}</h1>

  //     <div className={`${cn("scenter2 prXl:gap-[2rem]", className)}`}>
  //       {allProducts.map((product) => {
  //         const { productName, _id, productImage, price } = product;

  //         return (
  //           <Suspense key={_id} fallback={<h1>featured products</h1>}>
  //             <Product
  //               key={_id}
  //               name={productName}
  //               price={price}
  //               id={_id}
  //               productImage={productImage}
  //               className={{
  //                 img: "h-[30rem] prXl:h-[26rem] prLg:h-[19rem] prMd:h-[16rem] prSm:h-[28rem]",
  //               }}
  //             />
  //           </Suspense>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  return <h1>Featured Products Page</h1>;
};

export default FeaturedProducts;
