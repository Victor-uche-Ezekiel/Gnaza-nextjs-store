"use client";
import { accountSection1, accountSection2 } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

function AccountOverView({}: Props) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className=" h-max bg-[#fff] rounded-[8px]">
      <section className="flex flex-col">
        {accountSection1.map((page, id) => {
          const { title, link, icon } = page;
          return (
            <Link
              className="tran text-[1.4rem] p-[2rem_3rem] first:rounded-[8px_8px_0_0] flex items-end gap-[1rem] hmLg:p-[1.5rem] hover:bg-clr1 hover:text-[white]"
              key={id}
              href={link}
            >
              <span className="text-[2.5rem]">{icon}</span>
              {title}
            </Link>
          );
        })}
      </section>

      <section className="flex flex-col">
        {accountSection2.map((page, id) => {
          const { title, link } = page;
          return (
            <Link
              className="tran text-[1.4rem] p-[2rem_3rem] first:border-t border-clr9 hmLg:p-[1.5rem] hover:bg-clr1 hover:text-[white]"
              key={id}
              href={link}
            >
              {title}
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default AccountOverView;
