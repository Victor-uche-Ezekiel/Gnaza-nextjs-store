"use client";
import { closeModal } from "@/app/GlobalRedux/features/modal/modalSlice";
import { A, B, E, N, R } from "@/libs/helpers";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

function FiltersModal({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: any) => store.modal);
  const searchParams = useSearchParams();

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isEChecked, setIsEChecked] = useState(false);
  const [isNChecked, setIsNChecked] = useState(false);
  const [isRChecked, setIsRChecked] = useState(false);
  const [isBChecked, setIsBChecked] = useState(false);
  const [isAChecked, setIsAChecked] = useState(false);

  // searchParams
  const e = searchParams.get("e");
  const r = searchParams.get("r");
  const n = searchParams.get("n");
  const b = searchParams.get("b");
  const a = searchParams.get("a");
  const p = searchParams.get("page");

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      const newValue = value.toString();

      params.set(name, newValue);
      params.set("page", "1");

      return params.toString();
    },
    [searchParams]
  );

  const removeQueryParam = useCallback(
    (name: string, value?: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      params.set("page", "1");
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    // ("all" === "all") setIsAllChecked(!isAllChecked);
    !e && !n && !r && !b && !a ? setIsAllChecked(true) : setIsAllChecked(false);
    e === "earring" ? setIsEChecked(true) : setIsEChecked(false);
    n === "necklace" ? setIsNChecked(true) : setIsNChecked(false);
    r === "ring" ? setIsRChecked(true) : setIsRChecked(false);
    b === "bracelet" ? setIsBChecked(true) : setIsBChecked(false);
    a === "anklechain" ? setIsAChecked(true) : setIsAChecked(false);
  }, [e, n, r, b, a]);

  const setSearchParams = (paramName: string, paramValue: string) => {
    if (paramName === "all") setIsAllChecked(!isAllChecked);
    if (paramName === "e") setIsEChecked(!isEChecked);
    if (paramName === "n") setIsNChecked(!isNChecked);
    if (paramName === "r") setIsRChecked(!isRChecked);
    if (paramName === "b") setIsBChecked(!isBChecked);
    if (paramName === "a") setIsAChecked(!isAChecked);

    if (searchParams.get(paramName)) {
      router.replace(`/store?${removeQueryParam(paramName)}`, {
        scroll: false,
      });
    } else {
      router.push(`/store?${createQueryString(paramName, paramValue)}`, {
        scroll: false,
      });
    }
  };

  if (isOpen)
    return (
      <div className="hmXl:hidden uppercase">
        <div className="bg-clr9 h-[50rem] pt-[1rem] sticky top-[15rem] w-[30rem]">
          <div className="mb-[3rem]">
            <div className="mb-[1rem] flex items-center justify-between px-[2rem]">
              <h1 className="text-[1.4rem] font-semibold">Category</h1>
              <LiaTimesSolid
                className="text-[2.5rem] cursor-pointer"
                onClick={() => dispatch(closeModal())}
              />
            </div>
            <div className="flex flex-col ">
              <button
                className="checked text-[1.4rem] bg-[#fff]"
                onClick={() =>
                  router.replace(`/store?page=1`, {
                    scroll: false,
                  })
                }
              >
                <div className="input_container">
                  <input type="checkbox" name="" id="" checked={isAllChecked} />
                </div>
                all products
              </button>
              <button
                onClick={() => {
                  setSearchParams("e", E);
                }}
                className="checked w-max text-[1.4rem] "
              >
                <div className="input_container">
                  <input type="checkbox" name="" id="" checked={isEChecked} />
                </div>
                earrings
              </button>
              <button
                onClick={() => setSearchParams("n", N)}
                className="checked w-max text-[1.4rem]"
              >
                <div className="input_container">
                  <input type="checkbox" name="" id="" checked={isNChecked} />
                </div>
                <span>necklace</span>
              </button>
              <button
                onClick={() => setSearchParams("r", R)}
                className="checked w-max text-[1.4rem] "
              >
                <div className="input_container">
                  <input type="checkbox" name="" id="" checked={isRChecked} />
                </div>
                rings
              </button>
              <button
                onClick={() => setSearchParams("b", B)}
                className="checked w-max text-[1.4rem] "
              >
                <div className="input_container">
                  <input type="checkbox" name="" id="" checked={isBChecked} />
                </div>
                bracelets
              </button>
              <button
                onClick={() => setSearchParams("a", A)}
                className="checked w-max text-[1.4rem] "
              >
                <div className="input_container">
                  <input type="checkbox" name="" id="" checked={isAChecked} />
                </div>
                ankle chain
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-[1.4rem] font-semibold pl-[2rem] mb-[1rem]">
              price
            </h1>

            <label className="ml-[2rem] text-[1.2rem]" htmlFor="">
              min-price
            </label>
            <div className="ml-[2rem] border max-w-[15rem] mb-[1.5rem]">
              <input className="w-full" type="number" />
            </div>

            <label className="ml-[2rem] text-[1.2rem]" htmlFor="">
              max-price
            </label>
            <div className="ml-[2rem] border max-w-[15rem]">
              <input className="w-full" type="number" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default FiltersModal;
