import React from "react";

import { IoPersonOutline } from "react-icons/io5";
import { UserTypes } from "@/app/lib/types";
import { LiaHomeSolid } from "react-icons/lia";
import { PiAppStoreLogo } from "react-icons/pi";
import { LiaInfoSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { LuPackage2 } from "react-icons/lu";

const pages = [
  {
    link: "/",
    linkText: "home",
    pageIcon: <LiaHomeSolid />,
    id: 1,
  },
  { link: "/store", linkText: "products", pageIcon: <PiAppStoreLogo />, id: 2 },
  { link: "/about", linkText: "about", pageIcon: <LiaInfoSolid />, id: 3 },
];

const userSignUp: Array<UserTypes> = [
  {
    linkText: "account",
    linkIcon: <IoPersonOutline />,
    id: 1,
    link: "./login",
  },

  // {
  //   linkText: "Registar",
  //   // linkIcon: <IoPersonOutline />,
  //   id: 2,
  //   link: "./signup",
  // },
];

const products = [
  {
    name: "necklace",
    price: "$3,000",
  },
  {
    name: "necklace",
    price: "$3,000",
  },
  {
    name: "necklace",
    price: "$3,000",
  },
  {
    name: "necklace",
    price: "$3,000",
  },
  {
    name: "necklace",
    price: "$3,000",
  },
  {
    name: "necklace",
    price: "$3,000",
  },
];

const fSections = [
  {
    title: "products",
    links: ["Earrings", "necklace", "bracelets", "rings", "brooche"],
  },
  {
    title: "company",
    links: [
      "About us",
      "testimonials",
      "best sellers",
      "new arrivals",
      "FAQs",
      "latest updates",
    ],
  },
  {
    title: "support",
    links: [
      "size charts",
      "payment guide",
      "help center",
      "privacy policy",
      "return policy",
      "terms and condition",
    ],
  },
];

const accountSection1 = [
  {
    title: "my gnaza account",
    link: "/customer/account",
    icon: <IoPersonOutline />,
  },
  { title: "orders", link: "/customer/orders", icon: <LuPackage2 /> },
  { title: "saved items", link: "/customer/wishlist", icon: <FiHeart /> },
];

const accountSection2 = [
  { title: "account management", link: "/customer/manage-account" },
  { title: "address book", link: "/customer/address" },
];

export {
  pages,
  userSignUp,
  products,
  fSections,
  accountSection1,
  accountSection2,
};
