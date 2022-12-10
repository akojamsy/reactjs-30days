import React from "react";

const FeaturedHightlight = ({
  exist,
  data: { title, heading, text, img, btn, url },
}) => {
  return (
    <>
      <div
        className={`flex items-center justify-center lg:flex-col lg:justify-center nike-container gap-2 ${
          exist ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid lg:justify-items-center gap-2 '>
          <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>
            {heading}
          </h1>
          <h2 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl text-slate-900 filter drop-shadow-lg '>
            {title}
          </h2>
          <p className='xl:text-sm'>{text}</p>
          <a
            className=' flex items-center'
            target='_blank'
            role='button'
            href={url}
          >
            <button className='button-theme bg-slate-900 text-slate-100 shadow-slate-900 py-1.5 cursor-pointer  '>
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img
            src={img}
            alt={`img-${heading}`}
            className={`w-auto object-fill transitions-theme ${
              exist
                ? "h-60 lg:h-56 md:52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12 "
                : "h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedHightlight;
