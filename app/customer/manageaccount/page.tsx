"use client";
import ProfileDetails from "@/app/customer/[components]/ProfileDetails";
import { flexBetween } from "@/components/helpers";
import Image from "next/image";
import React, { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

import image from "../../../utils/images/gz 3.png";
import Security from "../[components]/Security";

type Props = {};

function ManageAccount({}: Props) {
  const [account, setAccount] = useState("profileDetails");
  return (
    <div className="scenter my-[3rem] grid grid-cols-[0.8fr_2fr] gap-[3rem] hmXl:grid-cols-[1fr]">
      <div className="shadow-[0_0_8px_rgb(212,_210,_207)]">
        <div className="h-[5rem] w-max mx-auto my-[2rem]">
          <Image className="h-full w-full" src={image} alt="logo" />
        </div>
        <h1 className="mb-[5rem] text-center text-[2rem] font-bold">
          Victor Ezekiel
        </h1>

        <div className="flex flex-col justify-start gap-y-[2rem]">
          <button
            className={`p-[1.5rem_0_1.5rem_2rem] shadow-[0_0_8px_rgb(212,_210,_207)] text-start flex gap-x-[2rem] items-center`}
            onClick={() => setAccount("profileDetails")}
          >
            {<IoPersonOutline className="text-[2.5rem] font-normal" />}
            <span className="text-[1.4rem] font-normal">Profile details</span>
          </button>
          <button
            className="p-[1.5rem_0_1.5rem_2rem] shadow-[0_0_8px_rgb(212,_210,_207)] text-start flex gap-x-[2rem] items-center"
            onClick={() => setAccount("security")}
          >
            {<BsLockFill className="text-[2.5rem] font-normal" />}
            <span className="text-[1.4rem] font-normal">security settings</span>
          </button>
        </div>
      </div>

      <div>
        {account === "profileDetails" ? <ProfileDetails /> : <Security />}
      </div>
    </div>
  );
}

export default ManageAccount;
