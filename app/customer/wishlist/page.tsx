import AccountOverView from "@/app/customer/[components]/AccountOverView";
import SingleSaveItem from "@/components/SingleSaveItem";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="py bg-clr9 h-full">
      <div className="scenter grid grid-cols-[0.8fr_2fr] gap-[3rem] hmXl:grid-cols-[1fr] hmMd:!w-full">
        <div className="w-full hmMd:w-[min(100%_-_2.5rem,_130rem)] mx-auto">
          <AccountOverView />
        </div>
        <SingleSaveItem />
      </div>
    </div>
  );
}

export default page;
