import Link from "next/link";
import React from "react";

type Props = {
  setShowAccount: (value: boolean) => void;
};

function AccountModle({ setShowAccount }: Props) {
  return (
    <div
      onMouseEnter={() => setShowAccount(true)}
      onMouseLeave={() => setShowAccount(false)}
      className="model absolute rounded-[5px] right-[-10rem] bg-clr9 mt-[rem]"
    >
      <div className="flex flex-col">
        <div className="border-b border-[#fff] px-[3rem] py-[1.5rem]">
          <Link href="/signup">
            <button className="rounded-[8px] bg-clr1 text-[#fff] text-[1.4rem] p-[1rem_3rem] w-[20rem]">
              sign in
            </button>
          </Link>
        </div>
        <div className="flex flex-col py-[1rem]">
          <Link
            onClick={() => setShowAccount(false)}
            href="/customer/account"
            className="tran text-[1.4rem] py-[1rem] font-semibold pl-[3rem] hover:bg-clr4"
          >
            my account
          </Link>
          <Link
            onClick={() => setShowAccount(false)}
            href="/customer/orders"
            className="tran text-[1.4rem] py-[1rem] font-semibold pl-[3rem] hover:bg-clr4"
          >
            order
          </Link>
          <Link
            onClick={() => setShowAccount(false)}
            href="/customer/wishlist"
            className="tran text-[1.4rem] py-[1rem] font-semibold pl-[3rem] hover:bg-clr4"
          >
            saved items
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountModle;
