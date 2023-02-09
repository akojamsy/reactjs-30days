import React, { useEffect, useState } from "react";
import Nike from "../assets/nike.png";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { setOpenCart } from "../redux/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const cartTotalQuantity = useSelector(
    (state) => state.cart?.cartTotalQuantity
  );

  const dispatch = useDispatch();

  const [navState, setNavbarState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavbarState(true);
    } else {
      setNavbarState(false);
    }
  };

  const handleCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <header
      className={
        !navState
          ? "absolute top-4 right-0 left-0 opacity-100 z-50"
          : "fixed top-0 right-0 left-0 opacity-100 z-50 blur-effect-theme h-[12vh] flex items-center justify-center"
      }
    >
      <nav className='flex justify-between items-center nike-container '>
        <div className='h-auto w-24 '>
          <img
            src={Nike}
            className={`h-full w-full ${navState && "filter brightness-0"}`}
            alt='nike-logo'
          />
        </div>
        <ul className='flex justify-center items-center gap-4'>
          <li className='grid items-center'>
            <MagnifyingGlassIcon
              className={`icon-style ${
                navState && "text-slate-900 transition-all "
              }`}
            />
          </li>
          <li className='grid items-center'>
            <HeartIcon
              className={`icon-style ${
                navState && "text-slate-900 transition-all "
              }`}
            />
          </li>
          <li className='grid items-center' onClick={handleCartToggle}>
            <button
              type='button'
              className='outline-none relative transition-all duration-300 active:scale-105'
            >
              <ShoppingBagIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all "
                }`}
              />
              <div
                className={`absolute h-4 w-4 right-0 top-4 shadow shadow-slate-100 text-slate-900 bg-white leading-tight font-medium rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300`}
              >
                {cartTotalQuantity}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
