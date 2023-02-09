import React from "react";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeItemFromCart,
} from "../../redux/slice/CartSlice";

const CartItem = ({
  id,
  color,
  shadow,
  img,
  itemQuantity,
  price,
  text,
  title,
}) => {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-between px-5'>
      <div className='flex items-center gap-5'>
        <div
          className={`bg-gradient-to-b ${color} ${shadow} hover:scale-105 transition-all duration-75 grid items-center relative rounded p-3`}
        >
          <img
            src={img}
            className={"w-32 h-auto lg:w-28 object-fill"}
            alt='cart-item-img'
          />
          <div className='blur-theme-effect bg-white/80 text-slate-900 absolute right-1 top-1 text-xs rounded px-1'>
            ₦{price}
          </div>
        </div>
        <div className='grid items-center gap-5 '>
          <div className='grid items-center leading-none'>
            <h2 className='font-medium text-lg lg:text-sm text-slate-800'>
              {title}
            </h2>
            <p className='font-medium text-sm lg:text-xsm text-slate-800'>
              {text}
            </p>
          </div>
          <div className='flex justify-around items-center w-[120px] '>
            <button className='bg-theme-cart w-5 h-6 lg:w-4 lg:h-5 active:scale-90 rounded flex items-center justify-center  '>
              <BiMinus
                className='text-white w-5 h-5 lg:w-4 lg:h-4'
                onClick={() => dispatch(decreaseQty({ id }))}
              />
            </button>
            <div className='bg-theme-cart w-7 h-6 lg:w-6 lg:h-5  rounded flex items-center justify-center text-white'>
              {itemQuantity}
            </div>
            <button className='bg-theme-cart  w-5 h-6 lg:w-4 lg:h-5 active:scale-90 rounded flex items-center justify-center  '>
              <BiPlus
                className='text-white lg:w-4 lg:h-4'
                onClick={() => dispatch(increaseQty({ id }))}
              />
            </button>
          </div>
        </div>
      </div>
      <div className='grid items-center gap-5'>
        <div className='grid items-center justify-center '>
          <h2 className='text-lg lg:text-base '>₦{price * itemQuantity}</h2>
        </div>
        <div className='grid items-center justify-center'>
          <button
            type='button'
            className='bg-theme-cart gridd items-center justify-items-center p-1 rounded'
          >
            <BiTrash
              className='text-white text-[18px] '
              onClick={() => dispatch(removeItemFromCart({ id, title }))}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
