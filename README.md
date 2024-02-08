This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- <div
            className={`${cn(
              flexBetween,
              "items-end"
            )}  [&>*:nth-child(2)_span]:hidden hmXl:hidden`}
          >
            {userSignUp.map((navIcon) => {
              const { link, linkText, linkIcon, id } = navIcon;
              return (
                <Link
                  key={id}
                  href={link}
                  className={`${cn(
                    flexBetween,
                    "text-[1.4rem] font-semibold items-end hmMd:text-[1.2rem]"
                  )} `}
                >
                  <li className="text-[3rem]">{linkIcon}</li>
                  <li className="">{linkText}</li>
                  {/* <span className="mx-[.5rem]">\</span> */}
                </Link>
              );
            })}
          </div> -->

<!-- const fetchAllProducts = async () => {
  const query = `*[_type == 'products' && (category in [null,null])] | order(_createdAt desc) {
    productImage,
      title,
      price,
      slug
  }
  `;

  const data = await client.fetch(query);

  return data;
}; -->

<!-- const allProducts: SingleProduct[] = await fetchAllProducts(); -->

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

/////////////////////////

"use client";
import React, { useCallback, useEffect, useState } from "react";

import Product from "./Product";
import Link from "next/link";

import Banner from "./Banner";
import { SingleProduct } from "@/lib/types";
import ProductsHeading from "./ProductsHeading";
import FiltersModal from "./FiltersModal";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
// scenter: string;
};

const AllProducts = ({}: Props) => {
const [allProducts, setAllProducts] = useState<SingleProduct[]>([]);

const searchParams = useSearchParams();
const router = useRouter();

// searchParams
const e = searchParams.get("e");
const r = searchParams.get("r");
const n = searchParams.get("n");
const b = searchParams.get("b");
const a = searchParams.get("a");
const p = searchParams.get("page");

const returnToPageOne = () => {
router.push(`/store?${createQueryString("page", 1)}`, {
scroll: false,
});
};

useEffect(() => {
returnToPageOne();
}, [e, r, n, b, a]);

const createQueryString = useCallback(
(paramName: string, paramValue: number) => {
const params = new URLSearchParams(searchParams);
const newParamValue = paramValue.toString();

      params.set(paramName, newParamValue);

      return params.toString();
    },
    [searchParams]

);

const removeQueryParam = useCallback(
(name: any) => {
const params = new URLSearchParams(searchParams);
params.delete(name);
return params.toString();
},
[searchParams]
);

const fetchAllProducts = async () => {
try {
const res = await fetch(
`http://localhost:3000/api/products?e=${e}&r=${r}&n=${n}&b=${b}&a=${a}&page=${
          p || 1
        }`,
{
method: "GET",
// cache: "no-store",
}
);

      if (!res.ok) {
        throw new Error("failed to fetch data");
      }
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.log("error", error);
    }

};

useEffect(() => {
fetchAllProducts();
}, [searchParams]);

const setSearchParams = (paramName: string, paramValue: number) => {
let page = searchParams.get("page");
let newPage;
let newPageValue;

    if (paramName === "next") {
      if (page === null) {
        page = "1";
        newPage = Number(page);
        newPageValue = newPage + 1;
      } else {
        newPage = Number(page);
        newPageValue = newPage + 1;
      }
      router.push(`/store?${createQueryString("page", newPageValue)}`, {
        scroll: false,
      });
    } else {
      if (page === null) {
        page = "1";
        newPage = Number(page);
        newPageValue = newPage - 1;
        if (newPageValue <= 1) newPageValue = 1;
      } else {
        newPage = Number(page);
        newPageValue = newPage - 1;
        if (newPageValue <= 1) newPageValue = 1;
      }
      router.push(`/store?${createQueryString("page", newPageValue)}`, {
        scroll: false,
      });
    }

};

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
      </div>

      <section className="w-[20rem] mx-auto mt-[5rem]">
        <div className="flex justify-between text-[1.4rem]">
          <button
            className="border border-clr1 px-[1rem] py-[0.5rem] hover:bg-clr1 hover:text-[white] tran"
            onClick={() => setSearchParams("prev", 1)}
          >
            prev
          </button>
          <h5 className="w-[10rem] flex justify-center border border-[transparent] px-[1rem] py-[0.5rem]">
            page {p}
          </h5>
          <button
            className="border border-clr1 px-[1rem] py-[0.5rem] hover:bg-clr1 hover:text-[white] tran"
            onClick={() => setSearchParams("next", 1)}
          >
            next
          </button>
        </div>
      </section>
    </div>

);
};

export default AllProducts;
