import React from "react";
import { footer } from "../data/data";

const Footer = ({ footer: { titles, links } }) => {
  return (
    <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 '>
            {titles.map((item, i) => (
              <div key={i} className='grid items-center'>
                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>
                  {item.title}
                </h1>
              </div>
            ))}
            {links.map((items, i) => (
              <ul key={i} className='grid items-center gap-1'>
                {items.map((footerlinks, index) => (
                  <li key={index} className='text-sm sm:text-xs'>
                    {footerlinks.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className='my-7 text-center'>
            <p className='text-sm md:text-center'>
              Copyright &copy; All right reserved 2022, AKOJAMSY
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
