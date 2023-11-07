import React from 'react'
import { banner } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[250px] h-[400px] lgl:w-[450px] lgl:h-[680px] z-10"
        src={banner}
        alt="banner"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[460px] lgl:h-[685px] bg-gradient-to-r from-[#A71435] to-[#F5f4f5] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner