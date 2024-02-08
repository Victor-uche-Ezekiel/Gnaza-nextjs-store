import Link from "next/link";
import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { TiInfoLargeOutline } from "react-icons/ti";
import { FaOpencart } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";

type Props = {};

function NavBottom({}: Props) {
  return (
    <section className="w-full bg-clr1 flex justify-center items-center sticky bottom-0 z-10">
      <ul className="text-[1.2rem] scenter max-w-[75%] ftLg:max-w-full hidden hmXl:flex justify-between items-center py-[0.5rem] hmsm:text-[1rem]">
        <Link className="font-semibold flex flex-col items-center" href="/">
          <RiHome6Line className="text-[1.8rem] hmsm:text-[1.5rem]" />
          <span>Home</span>
        </Link>
        <Link
          className="font-semibold flex flex-col items-center"
          href="/store"
        >
          <AiOutlineAppstore className="text-[1.8rem] hmsm:text-[1.5rem]" />
          <span>Products</span>
        </Link>
        <Link className="font-semibold flex flex-col items-center" href="">
          <TiInfoLargeOutline className="text-[1.8rem] hmsm:text-[1.5rem]" />
          <span>About</span>
        </Link>
        <Link className="font-semibold flex flex-col items-center" href="/cart">
          <FaOpencart className="text-[1.8rem] hmsm:text-[1.5rem]" />
          <span>cart</span>
        </Link>
        <Link
          className="font-semibold flex flex-col items-center"
          href="/customer/account"
        >
          <RxPerson className="text-[1.8rem] hmsm:text-[1.5rem]" />
          <span>Account</span>
        </Link>
      </ul>
    </section>
  );
}

export default NavBottom;
