import Image from "next/image";
import image from "../utils/images/hero-image1.png";
import Link from "next/link";

type Props = {};

function Hero(props: Props) {
  return (
    <section className="w-full bg-clr4 py-[5rem] mb">
      <div className="scenter grid grid-cols-[1.5fr_1fr]  items-center gap-x-[3rem] hmXl:grid-cols-1">
        <div className="mx-auto hmXl:row-start-2 hmXl:text-center hmXl:max-w-[75%] hmMd:max-w-[100%]">
          <h1 className="text-fSize1 text-clr2 font-pdisplay mb-[3rem]">
            Discover Timeless Luxury At{" "}
            <span className="font-meddon text-clr1">Gnaza</span>
          </h1>
          <p className="text-[2rem] leading-[1.5] mb-[3rem]">
            Accessorize Your Look With A Bold Statement Necklace Or Add Some
            Stackable Rings And Bracelets To Your Arm Candy.
          </p>
          <Link href="./store" className="btn text-clr1 py-[1rem] px-[2rem]">
            discover now
          </Link>
        </div>
        <div className="max-w-[100%] h-[90vh] max-h-[920px] hmXl:h-[70vh] hmLg:h-[50vh] hmsm:h-[auto] hmXl:row-start-1 hmXl:mb-[5rem]">
          <Image
            className="w-[100%] h-[100%] object-cover"
            src={image}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
