import React from "react";
import SingleCart from "@/components/SingleCart";
import CartTable from "@/components/CartTable";
import SubTotal from "@/components/SubTotal";
import FeaturedProducts from "@/components/FeaturedProducts";

type Props = {};

function CartsPage({}: Props) {
  return (
    <div className="pt cart scenter">
      <CartTable />
      <div className="mb">
        <SingleCart />
        <SingleCart />
      </div>
      <SubTotal />
      <FeaturedProducts fProductsText={"you may also like"} />
    </div>
  );
}

export default CartsPage;
