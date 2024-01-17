import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {
  placeholder: string;
};

function SearchBox({ placeholder }: Props) {
  return (
    <form className="border border-clr9 p-[0.5rem_2rem] rounded-full flex justify-between ftLg:row-[2] ftLg:col-[1_/_-1]">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full bg-[transparent] text-[1.4rem] capitalize text-clr2 font-normal active:outline-none focus:outline-none focus:outline-0"
      />
      <button
        className="text-clr2 text-[1.4rem] font-normal bg-clr1 rounded-full p-[0.3rem_1rem] w-[5rem] flex items-center justify-center"
        type="button"
      >
        <FiSearch className="text-[2.5rem] text-[#fff] font-bold" />
      </button>
    </form>
  );
}

export default SearchBox;
