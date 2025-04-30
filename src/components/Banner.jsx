import React from "react";
import bannerImg from "../assets/banner.jpg"


const Banner = () => {
  return (
    <>
      <div
        className="hero bg-[#9538E2] text-white rounded-b-3xl md:py-16 md:pb-48 relative"
      >
        
        <div className="hero-content text-center">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold md:leading-normal">Upgrade Your Tech Accessorize with <br className="hidden md:flex" /> Gadget Heaven Accessories</h1>
            <p className="mb-7 text-base font-normal">
            Explore the latest gadgets that will take your experience to the next level. <br className="hidden md:flex"/> From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white rounded-full text-[#9538E2] text-xl font-bold outline-none p-7 shadow-none">Shop Now</button>
          </div>
        </div>
        <div className="absolute md:w-[750px] lg:w-[1062px] h-[350px] lg:h-[563px] translate-y-[340px] lg:translate-y-[370px] z-10 bg-[#ffffff38] border-4 border-white rounded-3xl shadow-sm">
            <img className="h-full w-full rounded-[44px] p-6 object-cover" src={bannerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
