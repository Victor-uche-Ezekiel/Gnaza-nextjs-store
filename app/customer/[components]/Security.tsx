"use client";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";

import { cn, flexBetween } from "@/components/helpers";
import { useState } from "react";

type Props = {};

function Security({}: Props) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showComfirmPassword, setShowComfirmPassword] = useState(false);
  return (
    <div className="shadow-[0_0_8px_rgb(212,_210,_207)] p-[3rem] hmMd:p-[1.5rem]">
      <div className={flexBetween}>
        <h1 className="text-[2rem] font-semibold">Password settings</h1>
      </div>

      <div>
        <form className="flex flex-col gap-y-[3rem]" action="">
          <div
            className={`grid items-center grid-cols-[1fr_max-content] border border-clr9 pr-[2rem]`}
          >
            <input
              className="p-[2rem_0_2rem_2rem] text-[1.5rem] focus:outline-none w-[95%] w-[95%]"
              type="text"
              placeholder="Current Password"
            />
            {showCurrentPassword ? (
              <MdRemoveRedEye
                className="text-[2rem] text-clr1"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              />
            ) : (
              <IoEyeOffSharp
                className="text-[2rem] text-clr1"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              />
            )}
          </div>
          <div
            className={`grid items-center grid-cols-[1fr_max-content] border border-clr9 pr-[2rem]`}
          >
            <input
              className="p-[2rem_0_2rem_2rem] text-[1.5rem] focus:outline-none w-[95%]"
              type="text"
              placeholder="New Password"
            />
            {showNewPassword ? (
              <MdRemoveRedEye
                className="text-[2rem] text-clr1"
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            ) : (
              <IoEyeOffSharp
                className="text-[2rem] text-clr1"
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            )}
          </div>
          <div
            className={`grid items-center grid-cols-[1fr_max-content] border border-clr9 pr-[2rem]`}
          >
            <input
              className="p-[2rem_0_2rem_2rem] text-[1.5rem] focus:outline-none w-[95%]"
              type="text"
              placeholder="Comfirm Password"
            />
            {showComfirmPassword ? (
              <MdRemoveRedEye
                className="text-[2rem] text-clr1"
                onClick={() => setShowComfirmPassword(!showComfirmPassword)}
              />
            ) : (
              <IoEyeOffSharp
                className="text-[2rem] text-clr1"
                onClick={() => setShowComfirmPassword(!showComfirmPassword)}
              />
            )}
          </div>
          <button
            className={cn("btn", "!border-0 !bg-clr1 !text-[#fff]")}
            type="button"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Security;
