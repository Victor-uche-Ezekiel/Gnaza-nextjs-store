import React from "react";
import Image from "next/image";

import image from "../utils/images/look-3-1.jpg";
import {
  cartContainer,
  cartText,
  cartTextContents,
  cn,
} from "@/components/helpers";
import Quantity from "./Quantity";

type Props = {};

function SingleCart({}: Props) {
  return (
    <section className="">
      <div className={`${cartContainer}`}>
        <div
          className={`${cn(
            cartTextContents,
            "ctXl:border-b-0 pl-0 pr-[1rem]"
          )}`}
        >
          <Image
            src={image}
            alt=""
            className="max-w-[10rem] max-h-[10rem] object-cover ctXl:max-w-[7rem] ctXl:max-h-[7rem]"
          />
        </div>

        <div className={`${cartText}`}>
          <h1 className={`${cn(cartTextContents, "")}`}>
            Pearl Pendant Necklace
          </h1>
          <h3 className={`${cn(cartTextContents, "")} ctXl:col-[1]`}>
            $30,000{" "}
            <span className="hidden text-[1rem] ctLg:block text-clr1 pr-4">
              amount
            </span>
          </h3>
          <div className="ctLg:border-b border-clr9 flex justify-between items-center ctMd:py-[0.5rem] pl-[1rem] ctLg:pl-0 py-[0.5rem] border-r">
            <Quantity
              className="py-[0rem_!important] px-[0rem_!important] ctXl:mr-[0rem!important] ctLg:mr-[0!important]"
              btn="w-[5rem]"
            />
            <span className="hidden text-[1rem] ctLg:block text-clr1 pr-4">
              quantity
            </span>
          </div>
          <h3
            className={`${cn(
              cartTextContents,
              " ctXl:border-b-0 ctLg:border-b ctLg:col-[1] ctLg:row-[3]"
            )}`}
          >
            $90,000{" "}
            <span className="hidden text-[1rem] ctLg:block text-clr1 pr-4">
              subtotal
            </span>
          </h3>
          <i className={`${cn(cartTextContents, " ctXl:col-[1]")}`}>
            remove{" "}
            <span className="hidden text-[1rem] ctLg:block text-clr1 pr-4 ">
              remove
            </span>
          </i>
        </div>
      </div>
    </section>
  );
}

export default SingleCart;
