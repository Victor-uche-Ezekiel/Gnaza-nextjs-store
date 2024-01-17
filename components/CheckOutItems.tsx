import image from "../utils/images/look-3-1.jpg";
import Image from "next/image";
import { cn } from "@/components/helpers";
type Props = {};

function CheckOutItems({}: Props) {
  const ph1h3 = "text-[1.5rem] font-[600]";
  const total = "grid grid-cols-[repeat(2,_1fr)]";
  return (
    <div className="checkout__items border-l border-clr1 pl-[5rem] hmXl:mr-[10rem] hmXl:pl-0 hmXl:border-none">
      <div className={`${cn("page-banner")}`}>
        <h2 className="!text-fSize4">Products</h2>
      </div>

      <div className="items mb">
        <div className="item__container grid grid-cols-[max-content_1fr] gap-x-[3rem] items-center relative mb-[1.5rem]">
          <div className="max-w-[8rem] max-h-[8rem] rounded-[8px]">
            <Image className="w-full h-full rounded-[8px]" src={image} alt="" />
          </div>

          <div className="item__text flex justify-between">
            <span className="text-[#fff] bg-clr2 font-[600] absolute w-[2.5rem] h-[2.5rem] rounded-full left-[6.4rem] top-[-0.8rem] flex justify-center items-center">
              8
            </span>
            <h3 className="item__name">Necklace</h3>
            <h3 className="item__price">$30,000</h3>
          </div>
        </div>
      </div>

      <div className="subtotal">
        <div className="subtotal__text grid gap-y-[3rem]">
          <h1 className={ph1h3}>order summery</h1>
          <div className={total}>
            <h3 className={ph1h3}>total item</h3>
            <h3 className={ph1h3}>3</h3>
          </div>
          <div className={total}>
            <h3 className={ph1h3}>Subtotal</h3>
            <h3 className={ph1h3}>$840.00 USD</h3>
          </div>
          <div className={total}>
            <h3 className={ph1h3}>tax</h3>
            <h3 className={ph1h3}>$8.00 USD</h3>
          </div>
          <div className={total}>
            <h3 className={ph1h3}>shipping fee</h3>
            <h3 className={ph1h3}>$84USD</h3>
          </div>
          <div className={total}>
            <h3 className={ph1h3}>total</h3>
            <h3 className={ph1h3}>$8443.30 USD</h3>
          </div>
          <hr />
          <p className={`${ph1h3} mb-[1rem]`}>
            Taxes and shipping calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckOutItems;
