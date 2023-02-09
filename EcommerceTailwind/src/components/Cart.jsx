import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalItems,
  selectedState,
  setCloseCart,
} from "../redux/slice/CartSlice";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import EmptyCart from "./cart/EmptyCart";

const Cart = () => {
  const cartToggleState = useSelector(selectedState);
  const cartItems = useSelector((state) => state.cart?.cartItems);
  const totalAmount = useSelector((state) => state.cart?.cartTotalAmount);
  const cartTotalQuantity = useSelector(
    (state) => state.cart?.cartTotalQuantity
  );

  console.log(cartTotalQuantity, totalAmount);
  const dispatch = useDispatch();

  const handleCartItems = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  useEffect(() => {
    dispatch(getTotalItems());
  }, [cartItems, dispatch]);

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
        <div
          className={`absolute right-0  blur-effect-theme opacity-100 z-[250] h-screen max-w-xl w-full ${
            cartToggleState.cartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }
         `}
        >
          <CartCount
            handleCartItems={handleCartItems}
            cartTotalQuantity={cartTotalQuantity}
          />
          <div className='flex flex-col gap-y-7 overflow-y-scroll h-[75vh] scroll-smooth scroll-hidden py-3 '>
            {cartItems.length > 0 ? (
              cartItems?.map((cartItem) => (
                <div key={cartItem.id}>
                  <CartItem key={cartItem.id} {...cartItem} />
                </div>
              ))
            ) : (
              <EmptyCart handleCartItems={handleCartItems} />
            )}
          </div>
          <div className='fixed bottom-0 bg-white px-5 py-2 grid items-center w-full'>
            <div className='flex justify-between items-center'>
              <h2 className='text-base uppercase font-semibold '>Subtotal</h2>
              <h3 className='text-sm bg-theme-cart rounded text-slate-200 py-0.5 px-1 '>
                ₦{totalAmount}
              </h3>
            </div>
            <div className='grid items-center gap-2'>
              <p className='text-sm font-medium text-center'>
                Delivery Charges Will Apply If Any.
              </p>
              <button
                type='button'
                className='button-theme bg-theme-cart text-white'
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
