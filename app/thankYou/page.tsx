import ExampleComponent from "@/components/GetHeight";
import React from "react";

type Props = {};

function ThankYou({}: Props) {
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <ExampleComponent />
      <div className="mb text-center p-[2rem] rounded-[8px] shadow-[0_0_10px_rgba(0,_0,_0,_0.1)] bg-[#fff] max-w-[50rem] mx-auto">
        <h1 className="text-clr1 text-[clamp(2.5rem,_1rem_+_4.8vw,_3.5rem)] mb-[2rem]">
          Thank You!
        </h1>
        <p className="text-clr2 text-[2rem] leading-[1.5]">
          Your order has been successfully placed.
        </p>
        <p className="text-clr2 text-[2rem] leading-[1.5]">
          We appreciate your business.
        </p>

        <a
          href=""
          className="mt-[2rem] bg-clr1 text-[#fff] p-[1rem_1.5rem] rounded-[5px] inline-block text-[1.6rem] transition-[background-color] hover:bg-[#6e5744]"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
