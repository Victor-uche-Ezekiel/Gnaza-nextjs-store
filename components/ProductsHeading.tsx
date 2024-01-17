import { CiCreditCard1, CiGrid41 } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { flexBetween } from "./helpers";
import FiltersModal from "./FiltersModal";
import { useRef } from "react";

type Props = {};

function ProductsHeading({}: Props) {
  return (
    <div className="bg-[#fff] py-[1rem] mb-[3rem] z-10 sticky top-[10.2rem]">
      <div className="scenter grid grid-cols-[30rem,1fr] justify-between items-center gap-x-[3rem] hmLg:grid-cols-[1fr]">
        <button className="text-[1.4rem] font-semibold hmLg:hidden w-max">
          filters
        </button>
        <div className="max-w-[90rem] w-full flex items-center justify-between justify-self-end h-max">
          <div className={`flex items-center gap-x-[1rem] font-semibold`}>
            <CiGrid41 className="text-[2.5rem]" />
            <CiCreditCard1 className="text-[2.5rem]" />
            <h3 className="hidden text-[1.4rem] font-semibold hmLg:block">
              filters
            </h3>
          </div>
          <hr className="text-clr9 w-[50%] hmXl:hidden" />
          <div
            className={`flex items-center gap-x-[1rem] text-[1.4rem] font-semibold`}
          >
            <h3>sort by</h3>
            <span>(lowest)</span>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsHeading;
