import React from "react";
import { cn } from "@/components/helpers";

type Props = {};

const ph1h3 = "text-[1.5rem] text-clr2 font-[600]";

function SubTotal({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-[10rem] mb ctXl:grid-cols-1 ctXl:gap-x-[5rem]">
      <div>
        {/* <p className={ph1h3}>
          Add a note to your order / <span>(optional)</span>
        </p>
        <div>
          <textarea name="" id=""></textarea>
        </div> */}
      </div>
      <div className="grid gap-y-[3rem]">
        <h1 className={ph1h3}>order summery</h1>
        <div className="grid grid-cols-2">
          <h3 className={ph1h3}>total item</h3>
          <h3 className={ph1h3}>3</h3>
        </div>
        <div className="grid grid-cols-2">
          <h3 className={ph1h3}>Subtotal</h3>
          <h3 className={ph1h3}>$840.00 USD</h3>
        </div>
        <hr className="border-clr9" />
        <p className={`${ph1h3} mb-[1rem]`}>
          Taxes and shipping calculated at checkout
        </p>
        <button
          className={`${cn(
            "btn",
            "max-w-[100%!important] bg-[var(--clr-pry-1)_!important] text-[var(--clr-pry-4)_!important]"
          )}`}
        >
          go to checkout
        </button>
      </div>
    </div>
  );
}

export default SubTotal;
