import AccountOverView from "@/app/customer/[components]/AccountOverView";
import Link from "next/link";
import React from "react";

type Props = {};

const accountOverView = [
  {
    title: "account details",
    subTitle: "victor Ezekiel",
    text: "victoruche3022@gmail.com",
  },
  {
    title: "Address Book",
    subTitle: "Your default shipping address:",
    text: "No default shipping address available.",
    edit: "Add default address",
  },
  {
    title: "Gnaza STORE CREDIT",
    subTitle: "$800,000",
  },
];

function page({}: Props) {
  return (
    <div className="bg-clr9 py">
      <div className="scenter grid grid-cols-[0.8fr_2fr] gap-[3rem] hmXl:grid-cols-[1fr]">
        <AccountOverView />
        <section className="bg-[#fff] p-[1rem_2rem] rounded-[8px]">
          <h1 className="border-b border-clr9 py-[2rem] mb-[3rem] text-[1.5rem] font-semibold uppercase">
            account overview
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(35rem,1fr))] gap-[2rem] hmsm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
            {accountOverView.map((page, id) => {
              const { title, subTitle, edit, text } = page;
              return (
                <section className="border border-clr9 rounded-[8px]" key={id}>
                  <h2 className="p-[2rem] text-[1.4rem] uppercase border-b border-[#fff]">
                    {title}
                  </h2>
                  <div className="p-[2rem]">
                    <h3 className="text-[1.4rem] font-semibold mb-[1rem]">
                      {subTitle}
                    </h3>
                    <p className="text-[1.3rem] font-light">{text}</p>
                    <h3 className="mt-[5rem]">
                      <Link
                        href=""
                        className="text-[1.4rem] font-semibold uppercase text-clr1"
                      >
                        {edit}
                      </Link>
                    </h3>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
