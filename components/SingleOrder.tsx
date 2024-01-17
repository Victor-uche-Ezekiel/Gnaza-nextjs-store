import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import image from "../utils/images/look-3-1.jpg";
import { cn, flexBetween } from "./helpers";

type Props = {};

function SingleOrder({}: Props) {
  return (
    <div className="bg-[#fff] rounded-[8px] p-[2rem_3rem] mt-[3rem]">
      <section className={cn(flexBetween, "pb-[2rem] border-b border-clr9")}>
        <h3>expired</h3>
        <div className={cn(flexBetween)}>
          <div className="mr-[2rem] border-r border-clr9 pr-[1rem] text-right">
            <p className="text-[1.2rem] tracking-[0.1rem]">
              Order date: Aug 26, 2023
            </p>
            <p className="text-[1.2rem] tracking-[0.1rem]">
              Order ID: 8174091860994774
              <span className="text-[1.2rem] font-semibold text-[blue] ml-[1rem]">
                copy
              </span>
            </p>
          </div>
          <h3 className="text-[1.4rem] font-bold flex items-center justify-center">
            see all <IoIosArrowForward className="ml-[1rem] text-[2rem]" />
          </h3>
        </div>
      </section>
      <section
        className={cn(
          "grid grid-cols-[30fr_10fr] items-center py-[2rem] hmLg:grid-cols-[1fr] gap-y-[1rem]"
        )}
      >
        <div
          className={cn(
            "grid grid-cols-[repeat(3,20%)] hmLg:grid-cols-[repeat(3,30%)]",
            "gap-x-[0.5rem]"
          )}
        >
          <Image className="w-full h-full" src={image} alt="image" />
          <Image className="w-full h-full" src={image} alt="image" />
          <Image className="w-full h-full" src={image} alt="image" />
        </div>

        <div>
          <h3 className="mb-[1rem] text-[1.4rem]">total:us $3,000</h3>
          <div className="flex flex-col hmLg:flex-row hmLg:items-end hmLg:gap-x-[3rem]">
            <button
              className={cn(
                "btn",
                "!px-[0] !py-[0.5rem] !text-[1.4rem] !bg-clr1 !text-clr4 rounded-full mb-[1rem] hmLg:mb-0 hmLg:!px-[3rem]"
              )}
            >
              Add to cart
            </button>
            <button
              className={cn(
                "btn",
                "!px-[0] !text-[1.4rem] !py-[0.5rem] rounded-full hmLg:!px-[3rem]"
              )}
            >
              remove
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleOrder;
