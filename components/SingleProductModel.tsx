/* eslint-disable */
import React from "react";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";
import { ESLINT_DEFAULT_DIRS } from "next/dist/lib/constants";

type Props = {};

function SingleProductModel({}: Props) {
  return (
    <div>
      <Quantity />
      <AddToCart buttonText="add to cart" className="" />
      <AddToCart buttonText="buy now" className="" />
    </div>
  );
}

export default SingleProductModel;
