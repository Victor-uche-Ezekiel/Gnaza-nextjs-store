import React from "react";
import { cn } from "@/components/helpers";
import {
  cartContainer,
  cartText,
  cartTextContents,
} from "@/components/helpers";

type Props = {};

function CartTable({}: Props) {
  return (
    <div className={`${cn(cartContainer, "ctLg:hidden")}`}>
      <h1
        className={`${cn(cartTextContents, "ctXl:border-b-0 pl-0 pr-[1rem]")}`}
      >
        product image
      </h1>

      <div className={`${cartText}`}>
        <h1
          className={`${cn(
            cartTextContents,
            "ctXl:border-b-0 pl-0 pr-[1rem]"
          )}`}
        >
          product name
        </h1>

        <h3
          className={`${cn(cartTextContents, "ctXl:border-b-0 ctXl:hidden")}`}
        >
          price
        </h3>
        <h3 className={`${cn(cartTextContents, "ctXl:border-b-0")}`}>
          quantity
        </h3>
        <h3 className={`${cn(cartTextContents, "ctXl:border-b-0")}`}>
          subtotal
        </h3>
        <i className={`${cn(cartTextContents, "ctXl:border-b-0 ctXl:hidden")}`}>
          remove
        </i>
      </div>
    </div>
  );
}

export default CartTable;
