"use client";
import React, { useState } from "react";
import { cn } from "@/components/helpers";

type Props = {
  className?: string;
  btn?: string;
  setIsAdd?: (value: boolean) => void;
  count?: number;
  setCount?: any | ((value: number) => void);
};

function Quantity({ className, btn, count, setCount, setIsAdd }: Props) {
  console.log(count);

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
        onClick={() => {
          if (setCount)
            setCount((prevCount: number) => {
              const newCount = prevCount - 1;
              if ((newCount as number) < 1) {
                if (setIsAdd) setIsAdd(false);
              }
              return newCount;
            });
          // console.log(newCount);
        }}
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
        onClick={() => (setCount ? setCount((count as number) + 1) : null)}
      >
        +
      </span>
    </div>
  );
}

export default Quantity;
