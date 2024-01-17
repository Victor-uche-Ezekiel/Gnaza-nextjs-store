"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

import { RiMenuFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { userSignUp, pages } from "@/utils/data";
import { BsCart2 } from "react-icons/bs";
import image from "../utils/images/gz 3.png";
import { cn } from "@/components/helpers";
import { flexBetween } from "@/components/helpers";
import SearchBox from "./SearchBox";
import { useState } from "react";
import AccountModle from "./AccountModle";
import { LiaHomeSolid } from "react-icons/lia";
import { CiShop } from "react-icons/ci";
import { LiaInfoSolid } from "react-icons/lia";

type Props = {};

const Navigation = (props: Props) => {
  const name = useSelector((store: any) => store.appSlice.name);

  const [showAccount, setShowAccount] = useState(true);

  const pathName = usePathname();

  let navShow = "bg-[#fff] w-full py-[1rem] sticky top-0 z-40";

  if (
    pathName === "/login" ||
    pathName === "/signup" ||
    pathName === "/customer/manageaccount"
  )
    navShow = "hidden";
  if (pathName !== "/" && pathName.includes("customer") === false)
    navShow += " border-b border-clr9";

  return (
    <nav className={navShow}>
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center justify-between gap-x-[clamp(5rem,_1rem_+_4vw,_10rem)] scenter ftLg:grid-cols-[max-content_auto] ftLg:gap-y-[1.5rem]`}
      >
        <Link href="/" className="h-logo w-max">
          <Image className="h-full w-auto" src={image} alt="logo" />
        </Link>

        <SearchBox placeholder="search Products and categories" />

        <div className={`${flexBetween} gap-[2rem] hmXl:hidden hidden`}>
          {pages.map((page) => {
            const { id, link, linkText, pageIcon } = page;
            return (
              <Link key={id} href={link} className="">
                <li
                  className={`text-[1.4rem] font-semibold flex items-end gap-1`}
                >
                  <span className="text-[3rem]">{pageIcon}</span> {linkText}
                </li>
              </Link>
            );
          })}
        </div>

        <div className={`${flexBetween} gap-[2rem]`}>
          {/* signIn and signOut */}
          <div className="relative hmXl:hidden show-model">
            <div className={`flex`}>
              <IoPersonOutline
                className="text-[3rem] font-semibold"
                // onMouseEnter={() => setShowAccount(true)}
                // onMouseLeave={() => setShowAccount(false)}
              />
              <span
                className="self-end text-[1.4rem] font-semibold"
                // onMouseEnter={() => setShowAccount(true)}
                // onMouseLeave={() => setShowAccount(false)}
              >
                Account
              </span>
            </div>

            <AccountModle setShowAccount={setShowAccount} />
          </div>
          {/* cart */}
          <Link
            className="text-[1.4rem] font-semibold  hmXl:hidden"
            href="/carts"
          >
            <li className="flex items-end relative">
              <BsCart2 className="text-[3rem] hmMd:text-[2.3rem]" />
              <span className="text-[1.4rem] font-semibold hmMd:text-[1.2rem] hmMd:mb-[-0.5rem]">
                cart
              </span>
              <span className="absolute top-[-1rem] right-0 rounded-xl bg-clr1 text-[#fff] text-[1.2rem] min-w-[2rem] flex items-center justify-center px-[0.5rem]">
                33
              </span>
            </li>
          </Link>

          <RiMenuFill className="text-[3.2rem] mb-[-0.5rem] hidden hmXl:block cursor-pointer hmMd:text-[2.5rem]" />
        </div>
      </div>
      <section className="scenter flex justify-center items-center hmXl:hidden">
        <ul className="flex gap-x-[3rem] text-[1.4rem] mt-[1rem]">
          <Link className={`flex items-end justify-center`} href="/">
            {/* <LiaHomeSolid className="text-[3rem]" /> */}
            <span>Home</span>
          </Link>
          <Link className={`flex items-end justify-center`} href="/store">
            {/* <CiShop className="text-[3rem]" /> */}
            <span>Products</span>
          </Link>
          <Link className={`flex items-end justify-center`} href="">
            {/* <LiaInfoSolid className="text-[3rem]" /> */}
            <span>About</span>
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navigation;
