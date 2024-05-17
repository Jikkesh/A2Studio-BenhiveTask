import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroImg1 from "../../../assets/Banner/banner_0.jpg";
import HeroImg2 from "../../../assets/Banner/banner_1.jpg";
import HeroImg3 from "../../../assets/Banner/banner_2.jpg";
import HeroImg4 from "../../../assets/Banner/banner_3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-max my-10 w-full max-w-screen-xl z-10 relative">
      <Slider {...settings}>
        <div>
          <img src={HeroImg1} alt="" className="w-full  object-cover" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg2} alt="" className="w-full  object-cover" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg3} alt="" className="w-full  object-cover" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg4} alt="" className="w-full object-cover" style={{
            height : "540px"
          }}/>
        </div>
      
      </Slider>

      <div className="flex items-center flex-col">
       

        <button className="flex items-center font-Poppins cursor-pointer text-base md:text-lg border text-white bg-black border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200 absolute top-80 md:top-96 left-0 md:left-[250px]">
          <a href="/thank-you">Book now</a>
        </button>

      </div>
    </div>
  );
};

export default Hero;
