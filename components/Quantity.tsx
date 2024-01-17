"use client";
import React, { useState } from "react";
import { cn } from "@/components/helpers";

type Props = {
  className?: string;
  btn?: string;
  setIsAdd?: (value: boolean) => void;
  count?: number;
  setCount?: (value: number) => void;
};

function Quantity({ className, btn, count, setCount }: Props) {
  // const handleCount = (num) => {
  //   setCount?(count? + num<number>);
  // }

  return (
    <div
      className={`${cn(
        "amt-btn select-none min-w-[max-content!important] max-w-[max-content!important] !border-0 !cursor-auto flex items-center [&>*:nth-child(2)]:text-[1.5rem] [&>*:nth-child(2)]:cursor-auto",
        className
      )}`}
    >
      <span
        className={`${cn(
          "text-[2rem]  w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-clr9 text-clr4 last:mr-0 cursor-pointer"
        )}`}
        // onClick={handleCount}
      >
        -
      </span>
      <span
        className={`${cn(
          "text-[2rem]  flex items-center justify-center rounded-full",
          btn
        )}`}
      >
        {count}
      </span>
      <span
        className={`${cn(
          "text-[2rem] w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-clr9 text-clr4 cursor-pointer"
        )}`}
        // onClick={handleCount}
      >
        +
      </span>
    </div>
  );
}

export default Quantity;
