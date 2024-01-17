"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

function NotFound({}: Props) {
  const pathName = usePathname();
  return (
    <div className="w-full text-center">
      <h1 className="text-[5rem]">Page Not Found</h1>
      <h1 className="text-[3.5rem]">could not find page : {pathName} </h1>
      <Link className="text-clr1 text-[2rem]" href="/">
        back to home
      </Link>
    </div>
  );
}

export default NotFound;
