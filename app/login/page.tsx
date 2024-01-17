import React from "react";
import Image from "next/image";
import image from "../../utils/images/look-3-1.jpg";
import { cn } from "@/components/helpers";
import Link from "next/link";

type Props = {};

function LogIn({}: Props) {
  const classLabel = "block font-bold text-[1.2rem]";
  const classInputs =
    "w-full p-[1rem] box-border border border-clr2 rounded-[4px] text-[1.5rem] active:outline-clr1 focus:outline-clr1";

  return (
    <section className="mb scenter grid grid-cols-2 max-w-[80rem] shadow-[0_0_1rem_0.5rem_#d9c0a2] h-full min-h-[47rem] hmXl:grid-cols-1 mt-[5rem]">
      <div className="p-[2rem] rounded-[8px] self-center">
        <h1 className="text-fSize2 my-[2rem]">log in</h1>
        <form
          className="grid gap-[1rem] mt-[2rem]"
          action="/register"
          method="post"
        >
          <label className={classLabel}>Email:</label>
          <input
            className={classInputs}
            type="email"
            id="email"
            name="email"
            required
          />

          <label className={classLabel}>Password:</label>
          <input
            className={classInputs}
            type="password"
            id="password"
            name="password"
            required
          />

          <hr className="mt-[2rem] border-clr2" />

          <p className="text-[1.2rem] my-[1rem]">
            don't have an account
            <Link
              href="./signup"
              className="text-[#a77b56] font-[600] ml-[.5rem]"
            >
              sign up
            </Link>
          </p>

          <button
            className={`${cn(
              "btn",
              "bg-[#d9c0a2_!important] text-[#fff!important] hover:bg-[#a77b56_!important]"
            )}`}
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="hmXl:max-h-[40vh] row-[1]">
        <Image className="w-full h-full object-cover" src={image} alt="" />
      </div>
    </section>
  );
}

export default LogIn;
