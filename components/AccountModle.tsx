import React from "react";

type Props = {
  setShowAccount: (value: boolean) => void;
};

function AccountModle({ setShowAccount }: Props) {
  return (
    <div className="model hidden absolute rounded-[5px] right-[-10rem] bg-clr9 mt-[1rem]">
      <div className="flex flex-col">
        <div className="border-b border-[#fff] px-[3rem] py-[1.5rem]">
          <button className="rounded-[8px] bg-clr1 text-[#fff] text-[1.4rem] p-[1rem_3rem] w-[20rem]">
            sign in
          </button>
        </div>
        <div className="px-[2rem] py-[1rem]">
          <li className="text-[1.4rem] py-[1rem] font-semibold">home</li>
          <li className="text-[1.4rem] py-[1rem] font-semibold">About</li>
          <li className="text-[1.4rem] py-[1rem] font-semibold">products</li>
        </div>
      </div>
    </div>
  );
}

export default AccountModle;
