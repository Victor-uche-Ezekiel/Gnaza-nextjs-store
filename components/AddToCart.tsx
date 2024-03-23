"use client";
import React from "react";
import { cn } from "./helpers";

type Props = {
  className: string;
  buttonText: string;
  setIsAdd?: (value: boolean) => void;
  setCount?: (value: number) => void;
};

function AddToCart({ className, buttonText, setIsAdd, setCount }: Props) {
  return (
    <button
      onClick={() => {
        if (setIsAdd) setIsAdd(true);
        if (setCount) setCount(1);
      }}
      className={cn("btn", className)}
    >
      {buttonText}{" "}
    </button>
  );
}

export default AddToCart;
