"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import chickmagaluru from "@/app/components/PackagePageComponents/assets/chikamagaluru.png";
import kotilingeshwaratemple from "@/app/components/PackagePageComponents/assets/kotilingeshwaratemple.png";
import mysorepalace from "@/app/components/PackagePageComponents/assets/mysorepalace.png";
import ooty from "@/app/components/PackagePageComponents/assets/ooty.png";

const PackageBannerSection = () => {
  const sliderArray = [
    { image: chickmagaluru, title: "Chikmagaluru" },
    { image: kotilingeshwaratemple, title: "Kotilingeshwara Temple" },
    { image: mysorepalace, title: "Mysore Palace" },
    { image: ooty, title: "Ooty" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      {/* Slider */}
      <Slider {...settings}>
        {sliderArray.map((slide, index) => (
          <div key={index} className="relative w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1080}
              className="w-full object-cover h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Place Name Text */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <h2 className="text-white font-bold uppercase drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PackageBannerSection;
