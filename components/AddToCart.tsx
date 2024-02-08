"use client";
import React from "react";
import { cn } from "./helpers";

type Props = {
  className: string;
  buttonText: string;
  setIsAdd?: (value: boolean) => void;
};

function AddToCart({ className, buttonText, setIsAdd }: Props) {
  return (
    <button
      onClick={() => (setIsAdd !== undefined ? setIsAdd(false) : null)}
      className={cn("btn", className)}
    >
      {buttonText}{" "}
    </button>
  );
}

export default AddToCart;
