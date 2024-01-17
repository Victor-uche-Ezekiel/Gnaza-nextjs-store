import Image from "next/image";
import React from "react";

import image from "../utils/images/hero-image1.png";
import Quantity from "./Quantity";

import { cn } from "@/components/helpers";
import { client } from "@/app/lib/sanity";

type Props = {
  slug: string;
};

const fetchProduct = async (slug: string) => {
  const query = `*[_type == 'products' && slug.current == '${slug}'] {
    "productSlug":slug.current,
      title,
      price,
      productImage
  }[0]
  `;

  const data = await client.fetch(query);

  return data;
};

const SingleProductContainer = async ({ slug }: Props) => {
  const { title, productImage, price, productSlug } = await fetchProduct(slug);

  return (
    <div className="scenter mb">
      <article className="grid grid-cols-2 gap-x-[5rem] mb hmXl:grid-cols-1 hmXl:gap-y-[3rem] grid-rows-[max-content_1fr]">
        <div className="h-[100%] max-h-[80vh] hmXl:w-[70%] hmXl:justify-self-center">
          <Image
            className="w-[100%] h-[100%] object-cover"
            src={productImage}
            alt=""
            width={300}
            height={300}
          />
        </div>

        <div className="grid gap-y-[3rem] ">
          <h3 className="text-[2rem] hmXl:1.6rem">necklace</h3>
          <h1 className="text-fSize2 font-pdisplay font-normal leading-[1.5]">
            {title}
          </h1>
          <h5 className="text-[3rem] font-meddon text-clr10 hmXl:2.5rem">
            {price}
          </h5>
          <div>
            <p className="mb-[1.5rem] text-[1.6rem]">people are viewing</p>
            <p className="text-[1.6rem]">sold out recently</p>
          </div>

          <div>
            <p className="mb-[.5rem] text-[1.6rem]">QUANTITY</p>
            <Quantity btn="w-[5.5rem]" className="!border" />
          </div>

          <button className="btn text-clr1 py-[1rem] px-[2rem] !bg-clr4">
            add to cart
          </button>

          <button
            className={`${cn(
              "btn py-[1rem] px-[2rem] text-clr1",
              "!text-clr4 !bg-clr1"
            )}`}
          >
            buy it now
          </button>
        </div>
      </article>
    </div>
  );
};

export default SingleProductContainer;
