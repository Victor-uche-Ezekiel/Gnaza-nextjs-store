"use client";
import { CiCreditCard1, CiGrid41 } from "react-icons/ci";
import { useCallback, useEffect, useState } from "react";
import { closeSortModel, getNavHeight } from "@/libs/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
} from "@/app/GlobalRedux/features/modal/modalSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

type Props = {};

function ProductsHeading({}: Props) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: any) => store.modal);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sort, setSort] = useState("(A-Z)");
  // const [price, setPrice] = useState("(price:Low to High)");

  const [isSortOpen, setIsSortOpen] = useState(false);
  // const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    getNavHeight();
    closeSortModel(setIsSortOpen);
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      const newValue = value.toString();

      params.set(name, newValue);

      return params.toString();
    },
    [searchParams]
  );

  const setSearchParams = (
    paramName: string,
    paramValue: string,
    sortName: string
  ) => {
    setSort(sortName);
    router.push(`/store?${createQueryString(paramName, paramValue)}`, {
      scroll: false,
    });
  };

  return (
    <div
      id="navHeading"
      className={`bg-[#fff] py-[1rem] mb-[3rem] z-10 sticky`}
    >
      <div className="scenter grid grid-cols-[30rem,1fr] justify-between items-center gap-x-[3rem] hmLg:grid-cols-[1fr]">
        {isOpen ? (
          <button
            className="text-[1.4rem] font-semibold hmLg:hidden w-max"
            onClick={() => dispatch(closeModal())}
          >
            hide filters
          </button>
        ) : (
          <button
            className="text-[1.4rem] font-semibold hmLg:hidden w-max"
            onClick={() => dispatch(openModal())}
          >
            show filters
          </button>
        )}
        <div className="max-w-[90rem] w-full flex items-center justify-between justify-self-end h-max">
          <div className={`flex items-center gap-x-[1rem] font-semibold`}>
            <CiGrid41 className="text-[2.5rem]" />
            <CiCreditCard1 className="text-[2.5rem]" />
            <h3 className="hidden text-[1.4rem] font-semibold hmLg:block">
              filters
            </h3>
          </div>

          <div
            onClick={() => setIsSortOpen(!isSortOpen)}
            id="sort"
            className={`flex items-center gap-x-[1rem] text-[1.4rem] font-semibold relative w-[25rem] py-[0.5rem] pl-[1.5rem] bg-clr1 rounded-[8px] cursor-pointer`}
          >
            <h3 id="sortvalue" className="">
              sort by : {sort}
            </h3>

            {isSortOpen && (
              <div
                id="sort_container"
                className="absolute top-[3rem] bg-[white] flex items-center w-[25rem] right-[.0rem] rounded-[8px] shadow-[0_0_10px_rgba(0,_0,_0,_0.2)]"
              >
                <div className="flex flex-col w-full">
                  <button
                    id="sortvalue"
                    className="tran text-[1.4rem] pl-[1.5rem] py-[.8rem] text-start hover:bg-clr9 rounded-[8px_8px_0_0]"
                    onClick={() => setSearchParams("sort", "a-z", "A-Z")}
                  >
                    (A-Z)
                  </button>
                  <button
                    id="sortvalue"
                    className="tran text-[1.4rem] pl-[1.5rem] py-[.8rem] text-start hover:bg-clr9"
                    onClick={() => setSearchParams("sort", "z-a", "Z-A")}
                  >
                    (Z-A)
                  </button>
                  <button
                    id="sortvalue"
                    className="tran text-[1.4rem] pl-[1.5rem] py-[.8rem] text-start hover:bg-clr9"
                    onClick={() =>
                      setSearchParams("sort", "minprice", " Price: Low to High")
                    }
                  >
                    Price: Low to High
                  </button>
                  <button
                    id="sortvalue"
                    className="tran text-[1.4rem] pl-[1.5rem] py-[.8rem] text-start hover:bg-clr9 rounded-[0_0_8px_8px]"
                    onClick={() =>
                      setSearchParams("sort", "maxprice", "price: High to Low")
                    }
                  >
                    price: High to Low
                  </button>
                </div>
              </div>
            )}
            <FaAngleDown className="ml-[0.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsHeading;
