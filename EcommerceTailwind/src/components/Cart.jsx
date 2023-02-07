import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedState, setCloseCart } from "../redux/slice/CartSlice";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import EmptyCart from "./cart/EmptyCart";

const Cart = () => {
  const cartToggleState = useSelector(selectedState);
  const cartItems = useSelector((state) => state.cart?.cartItems);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleCartItems = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  return (
    <>
      <div
        className={`fixed right-0 left- top-0 bottom-0 blur-effect-theme opacity-100 z-[250] h-screen w-full
         ${
           cartToggleState.cartState
             ? "opacity-100 visible translate-x-0"
             : "opacity-0 invisible translate-x-8"
         }
         `}
      >
        <div className='absolute right-0  blur-effect-theme opacity-100 z-[250] h-screen max-w-xl w-full'>
          <CartCount handleCartItems={handleCartItems} />
          {cartItems ? (
            cartItems?.map((cartItem) => (
              <div>
                <CartItem key={cartItem.id} {...cartItem} />
              </div>
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
