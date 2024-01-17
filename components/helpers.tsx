import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const flexBetween = "flex items-center justify-between";

export const formText =
  "flex flex-col mb-[5rem] ftLg:flex-col ftLg:flex ftLg:justify-between";
export const input =
  "w-full p-[1rem] text-[1.6rem] border-clr2 border shadow-clr2 active:border-none focus:outline-clr1 active:shadow-clr1 focus:border-none active:outline-clr1 focus:shadow-clr1 col-[1_/_-1]";

export const paymentType =
  "payment__type border border-clr2 border-b-0 py-[1.5rem] px-[2rem] flex items-center last:rounded-[8px] last:border-b last:rounded-t-none first:rounded-[8px]";

export const paymentInputs = `mr-[1rem] w-[2rem] h-[2rem] rounded-full shadow-none hover:cursor-pointer hover:border border-[blue]`;

/////////////////////////////////

export const cartText =
  "grid grid-cols-[2fr_1fr_1.2fr_repeat(2,_1fr)] items-center ctXl:grid-cols-[2fr_repeat(2,_1fr)] ctXl:gap-x-[1rem] ctLg:grid-cols-[1fr] ctLg:grid-rows-[repeat(5,_max-content)] ctLg:gap-x-[3rem]";

export const cartTextContents =
  "text-[1.3rem] text-clr2 font-[600] pl-[1rem] py-[0.5rem] border-r border-clr9 flex justify-between items-center ctXl:border-b ctLg:pl-0 ctSm:text-[1.1rem]";

export const cartContainer =
  "grid grid-cols-[12rem_5fr] items-center gap-x-[2rem] mb-[2rem] pb-[2rem] border-b border-clr9 ctLg:gap-x-[1rem] ctLg:grid-cols-[max-content_5fr]";
