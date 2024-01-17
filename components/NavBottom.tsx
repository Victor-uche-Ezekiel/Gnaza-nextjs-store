import Link from "next/link";
import React from "react";

type Props = {};

function NavBottom({}: Props) {
  return (
    <section className="w-full bg-clr1 flex justify-center items-center sticky bottom-0">
      <ul className="text-[1.4rem] scenter max-w-[75%] ftLg:max-w-full hidden hmXl:flex justify-between items-center py-[1rem]">
        <Link className="font-semibold" href="">
          Home
        </Link>
        <Link className="font-semibold" href="">
          Products
        </Link>
        <Link className="font-semibold" href="">
          About
        </Link>
        <Link className="font-semibold" href="">
          cart
        </Link>
        <Link className="font-semibold" href="">
          Account
        </Link>
      </ul>
    </section>
  );
}

export default NavBottom;
