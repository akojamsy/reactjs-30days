import React from "react";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import EmptyCart from "./cart/EmptyCart";

const Cart = () => {
  return (
    <>
      <div className='fixed right-0 left-0 top-0 bottom-0 blur-effect-theme opacity-100 z-[250] h-screen w-full '>
        <div>
          <CartCount  />
          <CartItem />
          <EmptyCart />
        </div>
      </div>
    </>
  );
};

export default Cart;
