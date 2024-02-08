import React from "react";

import { IoPersonOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { LuPackage2 } from "react-icons/lu";

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
  { title: "account management", link: "/customer/manageaccount" },
  { title: "address book", link: "/customer/address" },
];

export { products, fSections, accountSection1, accountSection2 };
