import React from "react";

const FeaturedHightlight = ({
  data: { title, heading, text, img, btn, url },
}) => {
  return (
    <>
      <div
        className={`flex items-center justify-center lg:flex-col lg:justify-center nike-container gap-2`}
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
          <img src={img} alt={`img-${heading}`} />
        </div>
      </div>
    </>
  );
};

export default FeaturedHightlight;
