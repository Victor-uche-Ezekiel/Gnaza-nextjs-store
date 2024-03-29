"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "../utils/images/look-3-1.jpg";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductPropsType } from "@/libs/types";

type Props = ProductPropsType & {
  className: { img: string };
};

const Product = ({
  productName,
  price,
  className,
  id,
  productImage,
}: Props) => {
  const [isGreaterThanOne, setIsGreaterThanOne] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState(false);

  let [count, setCount] = useState<number>(0);

  // if (count < 0) {
  //   setCount((count = 0));
  //   setIsAdd(false);
  // }

  return (
    <article className="bsh pb-[1rem] h-max">
      <div className={className.img}>
        <Link href={`/store/${id}`}>
          <Image
            className="mb-[1rem] h-[100%] w-[100%] object-cover"
            src={productImage}
            alt=""
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="px-[1rem]">
        <h3 className="text-[1.6rem] font-normal mb-[1rem] text-start line-clamp-2">
          {productName}
        </h3>
        <h5 className="text-[2rem] font-meddon mb-[1rem]">{price}</h5>

        {isAdd === true ? (
          <Quantity
            className="!border border-clr1 rounded-[20px]"
            btn="w-[5.5rem]"
            setIsAdd={setIsAdd}
            count={count}
            setCount={setCount}
          />
        ) : (
          <AddToCart
            className="rounded-[20px]"
            buttonText="add to cart"
            setIsAdd={setIsAdd}
            setCount={setCount}
          />
        )}
      </div>
    </article>
  );
};

export default Product;
