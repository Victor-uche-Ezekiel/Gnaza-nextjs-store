import FeaturedProducts from "@/components/FeaturedProducts";
import SingleProductContainer from "@/components/SingleProductContainer";
import React from "react";

type Props = {
  params: { id: string };
};

const SingleProduct = ({ params }: Props) => {
  const { id } = params;
  console.log(params, "single product params");

  return (
    <div className="pt">
      <SingleProductContainer id={id} />
      <FeaturedProducts fProductsText="You May Also Like" className="" />
    </div>
  );
};

export default SingleProduct;
