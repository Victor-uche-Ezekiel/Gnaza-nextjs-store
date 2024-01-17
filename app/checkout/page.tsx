import CheckOutInformation from "@/components/CheckOutInformation";
import CheckOutItems from "@/components/CheckOutItems";
import React from "react";

type Props = {};

function CheckOut({}: Props) {
  return (
    <div className="scenter grid grid-cols-[1.3fr_1fr] hmXl:grid-cols-1 hmXl:px-[2rem]">
      <CheckOutInformation />
      <CheckOutItems />
    </div>
  );
}

export default CheckOut;
