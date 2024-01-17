import Image from "next/image";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts fProductsText="featured products" />
      <Banner
        className={{
          img: "w-full h-[50vh] col-start-1 row-start-1 z-[-1]",
          btn: "btn",
          mb: "mb",
        }}
      />
      <FeaturedProducts fProductsText="Customers Also Bought" />
      <Banner
        className={{
          img: "w-full h-[50vh] col-start-1 row-start-1 z-[-1]",
          btn: "btn",
          mb: "mb",
        }}
      />
    </>
  );
}

export default Home;
