import React from "react";
import ChevronLeft from "./../utils/ChevronLeft";
import { IoClose } from "react-icons/io5";

const CartCount = ({ handleCartItems, cartTotalQuantity }) => {
  return (
    <>
      <div className='w-full h-11 flex items-center justify-between sticky bg-white top-0 left-0 right-0 '>
        <div className='flex items-center gap-3 ml-3'>
          <div
            className='grid items-center cursor-pointer'
            onClick={handleCartItems}
          >
            <ChevronLeft className='w-6 h-6 hover:text-orange-600 text-slate-900 stroke-[2]' />
          </div>
          <div className='grid items-center'>
            <h2>
              Your cart
              <span className='bg-theme-cart rounded text-slate-100 px-1 py-0.5 ml-2 text-xs'>
                ({cartTotalQuantity} Items)
              </span>
            </h2>
          </div>
        </div>
        <div onClick={handleCartItems}>
          <IoClose className='bg-theme-cart rounded text-slate-100 px-1 mr-5 py-0.5 ml-2 text-xl active:scale-90 cursor-pointer' />
        </div>
      </div>
    </>
  );
};

export default CartCount;
