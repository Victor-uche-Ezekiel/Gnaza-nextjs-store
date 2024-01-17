import React from "react";
import image from "../utils/images/look-3-1.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className: { img: string; btn?: string; mb?: string };
};

const Banner = ({ className }: Props) => {
  return (
    <section className={`banner ${className.mb}`}>
      <article className="grid grid-cols-1 items-center text-center">
        <div className={className.img}>
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt="banner image"
          />
        </div>
        <div className="col-start-1 row-start-1">
          <h3 className="text-[2rem] mb-[3rem] font-[600]">
            DELICATE AND DAINTY
          </h3>
          <h1 className="text-fSize2 font-[300] mb-[3rem] ">New Collection</h1>
          <Link
            href="/store"
            className={`${className.btn} text-clr1 py-[2rem] px-[4rem]`}
          >
            discover now
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Banner;
