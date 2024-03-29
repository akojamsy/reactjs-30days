import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className='relative h-28 w-32 overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 xsm:w-14 lg:h-24 md:h-16 sm:h-14 xsm:h-14'>
        <img
          src={imgsrc}
          alt='img-clips'
          className='inset-0 flex w-full h-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
        />
        <div className='bg-white blur-effect-theme absolute top-11 left-11 lg:left-9 lg:top-8 sm:left-5 sm:top-4  right-0  opacity-100 z-[50] w-8 h-8 md:h-5 md:w-5 flex items-center justify-center rounded-full '>
          <PlayIcon className='icon-style text-slate-800 md:h-3 md:w-3' />
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:z-50 group-hover:opacity-100'
          src={clip}
          type='video/mp4'
        ></video>
      </div>
    </>
  );
};

export default Clips;
