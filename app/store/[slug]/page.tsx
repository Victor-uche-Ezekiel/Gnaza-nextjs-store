import FeaturedProducts from "@/components/FeaturedProducts";
import SingleProductContainer from "@/components/SingleProductContainer";
import React from "react";

type Props = {
  params: { slug: string };
};

const SingleProduct = ({ params }: Props) => {
  const { slug } = params;

  return (
    <div className="pt">
      <SingleProductContainer slug={slug} />
      <FeaturedProducts fProductsText="You May Also Like" className="" />
    </div>
  );
};

export default SingleProduct;
