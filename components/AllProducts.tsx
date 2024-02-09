"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Product from "./Product";
import Link from "next/link";

import Banner from "./Banner";
import { SingleProduct } from "@/libs/types";
import ProductsHeading from "./ProductsHeading";
import FiltersModal from "./FiltersModal";
import { useRouter, useSearchParams } from "next/navigation";
import { setSearchParams } from "@/libs/helpers";
import { fetchAllProducts } from "@/libs/httpcalls";
import Loading from "./Loading";
import AddToCart from "./AddToCart";
import Quantity from "./Quantity";
import { IoIosAdd } from "react-icons/io";

type Props = {};

const AllProducts = ({}: Props) => {
  const [allProducts, setAllProducts] = useState<SingleProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  // searchParams
  const e = searchParams.get("e");
  const r = searchParams.get("r");
  const n = searchParams.get("n");
  const b = searchParams.get("b");
  const a = searchParams.get("a");
  const p = searchParams.get("page");
  const sort = searchParams.get("sort");

  const createQueryString = useCallback(
    (paramName: string, paramValue: number) => {
      const params = new URLSearchParams(searchParams);
      const newParamValue = paramValue.toString();

      params.set(paramName, newParamValue);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    fetchAllProducts(e, r, n, b, a, p, sort, setAllProducts, setIsLoading);
  }, [searchParams]);

  return (
    <div className="mb-[5rem]">
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
        {/* 
        {isLoading ? (
          <h1>hello</h1>
        ) : ( */}
        <div className={`scenter1 w-full prXl:gap-[2rem]`}>
          {allProducts.map((product, id) => {
            const { productName, productImage, price, _id } = product;
            return (
              <Product
                key={_id}
                name={productName}
                price={price}
                id={_id}
                productImage={productImage}
                className={{
                  img: "h-[22rem] prXl:h-[26rem] prLg:h-[19rem] prMd:h-[16rem] prSm:h-[28rem]",
                }}
              />
            );
          })}
        </div>
        {/* )} */}
      </div>

      <section className="w-[20rem] mx-auto mt-[5rem]">
        <div className="flex justify-between text-[1.4rem]">
          <button
            className="border border-clr1 px-[1rem] py-[0.5rem] hover:bg-clr1 hover:text-[white] tran"
            onClick={() =>
              setSearchParams("prev", p, router, createQueryString)
            }
          >
            prev
          </button>
          <h5 className="w-[10rem] flex justify-center border border-[transparent] px-[1rem] py-[0.5rem]">
            page {p}
          </h5>
          <button
            className="border border-clr1 px-[1rem] py-[0.5rem] hover:bg-clr1 hover:text-[white] tran"
            onClick={() =>
              setSearchParams("next", p, router, createQueryString)
            }
          >
            next
          </button>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
