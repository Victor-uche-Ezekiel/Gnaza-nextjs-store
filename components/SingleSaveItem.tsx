import Image from "next/image";
import React from "react";

import image from "../utils/images/look-3-1.jpg";
import AddToCart from "./AddToCart";
import Quantity from "./Quantity";
import { cn } from "./helpers";

type Props = {};

function SingleSaveItem({}: Props) {
  return (
    <section className="bg-[#fff] h-max rounded-[8px] p-[2rem_3rem] grid grid-cols-[max-content_1fr] gap-x-[3rem] hmMd:p-[1.5rem] hmMd:rounded-none hmMd:gap-x-[1rem]">
      <div>
        <Image
          className="w-[10rem] h-[10rem] object-cover ctXl:max-w-[7rem] ctXl:max-h-[7rem]"
          src={image}
          alt=""
        />
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-[2rem] hmXl:grid-cols-[1fr]">
        <div>
          <h1 className="text-[1.5rem] font-[600] py-[0.5rem] ctSm:text-[1.3rem]">
            Pearl Pendant Necklace
          </h1>
          <h3 className="text-[1.5rem] font-[600] py-[0.5rem] ctSm:text-[1.3rem]">
            $3,000
          </h3>
          <Quantity
            className="py-[0rem_!important] px-[0rem_!important] ctXl:mr-[0rem!important] ctLg:mr-[0!important] mt-[1rem]"
            btn="w-[5rem]"
          />
        </div>

        <div className="flex flex-col">
          <AddToCart
            buttonText="Add to cart"
            className={cn(
              "btn",
              "!px-[0] !py-[0.5rem] !text-[1.4rem] !bg-clr1 !text-clr4 rounded-full mb-[1rem]"
            )}
          />
          <button
            className={cn(
              "btn",
              "!px-[0] !text-[1.4rem] !py-[0.5rem] rounded-full"
            )}
          >
            remove
          </button>
        </div>
      </div>
    </section>
  );
}

export default SingleSaveItem;
