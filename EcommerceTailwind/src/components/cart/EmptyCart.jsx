import React from "react";
import emptybag from "../../assets/emptybag.png";
import { BsArrowLeft } from "react-icons/bs";

const EmptyCart = ({ handleCartItems }) => {
  return (
    <>
      <div className='flex flex-col px-11 justify-center items-center text-center h-screen gap-7'>
        <img
          src={emptybag}
          alt='empty-bag'
          className='w-40 lg:w-36 sm:w-28 hover:scale-110 transition-all duration-300 cursor-pointer h-auto object-fill'
        />
        <button
          className='button-theme bg-gradient-to-b from-amber-500 to-orange-600 shadow-lg shadow-orange-500 text-sm font-semibold flex justify-center items-center gap-3 px-4 py-2 active:scale-110 text-slate-900 transition-all duration-300'
          onClick={handleCartItems}
        >
          <BsArrowLeft className='text-slate-900 w-5 h-5' />
          Back To Store
        </button>
      </div>
    </>
  );
};

export default EmptyCart;
