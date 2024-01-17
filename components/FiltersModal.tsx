import React from "react";

import { LiaTimesSolid } from "react-icons/lia";

type Props = {};

function FiltersModal({}: Props) {
  return (
    <div className="hmXl:hidden">
      <div className="bg-clr1 h-[50rem] pt-[1rem] sticky top-[15rem] w-[30rem]">
        <div className="mb-[3rem]">
          <div className="mb-[1rem] flex items-center justify-between px-[2rem]">
            <h1 className="text-[1.4rem] font-semibold">Category</h1>
            <LiaTimesSolid className="text-[2.5rem] cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <button className="pl-[2rem] py-[1rem] text-[1.3rem] text-start bg-[#fff]">
              all
            </button>
            <button className="pl-[2rem] py-[1rem] text-[1.3rem] text-start ">
              earrings
            </button>
            <button className="pl-[2rem] py-[1rem] text-[1.3rem] text-start ">
              necklace
            </button>
            <button className="pl-[2rem] py-[1rem] text-[1.3rem] text-start ">
              rings
            </button>
            <button className="pl-[2rem] py-[1rem] text-[1.3rem] text-start ">
              bracelets
            </button>
            <button className="pl-[2rem] py-[1rem] text-[1.3rem] text-start ">
              ankle chain
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-[1.4rem] font-semibold pl-[2rem] mb-[1rem]">
            price
          </h1>

          <label className="ml-[2rem] text-[1.2rem]" htmlFor="">
            min-price
          </label>
          <div className="ml-[2rem] border max-w-[15rem] mb-[1.5rem]">
            <input className="w-full" type="number" />
          </div>

          <label className="ml-[2rem] text-[1.2rem]" htmlFor="">
            max-price
          </label>
          <div className="ml-[2rem] border max-w-[15rem]">
            <input className="w-full" type="number" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersModal;
