import AccountOverView from "@/app/customer/[components]/AccountOverView";
import SearchBox from "@/components/SearchBox";
import SingleOrder from "@/components/SingleOrder";
import { cn, flexBetween } from "@/components/helpers";
import Link from "next/link";
import React from "react";

type Props = {};

function OrdersPage({}: Props) {
  return (
    <div className="py bg-clr9 h-full">
      <div className="scenter grid grid-cols-[0.8fr_2fr] gap-[3rem] hmXl:grid-cols-[1fr]">
        <AccountOverView />
        <div>
          <div className="bg-[#fff] p-[2rem_3rem] rounded-[8px]">
            <div className={`${flexBetween} mb-[3rem]`}>
              <div
                className={cn(
                  flexBetween,
                  "gap-x-[3rem] text-[1.4rem] font-semibold hmXl:hidden"
                )}
              >
                <Link href="">All</Link>
                <Link href="">unpaid(0)</Link>
                <Link href="">processing(0)</Link>
                <Link href="">shipped(0)</Link>
                <Link href="">processed</Link>
              </div>
              <button className="text-[1.2rem] capitalize">
                deleted orders
              </button>
            </div>

            <div className="">
              <div>
                {/* <input type="select" /> */}
                <SearchBox placeholder="order id or product name" />
              </div>

              {/* <input type="select" /> */}
            </div>
          </div>
          <SingleOrder />
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
