import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Item = ({
  btn,
  color,
  id,
  img,
  price,
  rating,
  shadow,
  text,
  title,
  exist,
}) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          exist ? "justify-items-start" : "justify-items-center"
        }  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid ${
            exist ? "justify-items-start" : "justify-items-center items-center"
          } `}
        >
          <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow '>
            {title}
          </h1>
          <p className='text-slate-200 text-base md:text-sm font-normal filter drop-shadow '>
            {text}
          </p>
          <div className='flex items-center justify-between w-28 my-3'>
            <div className='flex items-center bg-white/80 px-1 rounded'>
              <h1 className='text-black text-md blur-effect-theme font-medium'>
                ₦ {price}
              </h1>
            </div>
            <div className='flex items-center gap-1'>
              <StarIcon className='icon-style text-slate-100 w-5 h-5 md:w-4 md:h-4' />
              <h1 className='md:text-sm font-normal text-slate-100'>
                {rating}
              </h1>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              className='blur-effect-theme button-theme p-0.5 shadow shadow-sky-200'
            >
              <ShoppingBagIcon className='icon-tyle text-slate-900 w-5 h-5' />
            </button>
            <button
              type='button'
              className='bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 text-sm text-black'
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            exist ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            className={`transitions-theme hover:-rotate-12 ${
              exist
                ? "h-auto w-64 lg:w-56 md:w-48  xsm:w-35 -rotate-[35deg]"
                : "h-36 w-64"
            }`}
            src={img}
            alt='item-img'
          />
        </div>
      </div>
    </>
  );
};

export default Item;
