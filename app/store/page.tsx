import AllProducts from "@/components/AllProducts";
import FeaturedProducts from "@/components/FeaturedProducts";

type Props = {
  params: { slug: string };
};

const ProductsStore = (props: Props) => {
  return (
    <div className="pt">
      <AllProducts />
      <FeaturedProducts fProductsText="You May Also Like" className="" />
    </div>
  );
};

export default ProductsStore;
