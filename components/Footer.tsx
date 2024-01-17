"use client";
import Image from "next/image";
import React from "react";
import { fSections } from "@/utils/data";

import logo from "../utils/images/gz 5.png";
import { usePathname } from "next/navigation";

type Props = {};

const Footer = (props: Props) => {
  const pathName = usePathname();

  let footerShow = "pt-[10rem] px-[0] pb-[5rem]";

  if (
    pathName === "/login" ||
    pathName === "/signup" ||
    pathName === "/customer/manageaccount"
  )
    footerShow = "hidden";

  return (
    <section className={footerShow}>
      <footer className="scenter footer__container section__center">
        <div className="grid grid-cols-[2fr_1fr] items-center gap-[5rem] mb-[6rem] ftLg:grid-cols-[3fr_max-content] ftLg:gap-[3rem]">
          <h3 className="text-fSize4 font-[400] max-w-[50rem] leading-[2] ftLg:max-w-[auto]">
            Accessorize Your Look With A Bold Statement Necklace Or Add Some
          </h3>
          <Image
            src={logo}
            alt="logo"
            className="h-logo w-[auto] justify-self-center"
          />
        </div>
        <div className="grid grid-cols-3 ftXl:grid-cols-2 ftLg:grid-cols-1">
          {fSections.map((section, id) => {
            const { title, links } = section;
            return (
              <div key={id} className="footer__products">
                <h2 className="text-fSize3 mb-6 text-clr1 font-[400] ftLg:mb-[1.5rem]">
                  {title}
                </h2>
                <div className="footer__links ftLg:mb-[5rem] ftLg:gap-y-[1.5rem] ftLg:flex ftLg:flex-wrap gap-x-[3rem] ftLg:border-b border-clr9">
                  {links.map((link, id) => {
                    return (
                      <h3
                        key={id}
                        className="text-[1.5rem] mb-[3rem] text-clr8 font-[600]"
                      >
                        {link}
                      </h3>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
