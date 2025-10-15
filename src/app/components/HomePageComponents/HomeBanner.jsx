"use client";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "@/app/components/HomePageComponents/banner_images/bangalore_taxi_service.webp";
import image2 from "@/app/components/HomePageComponents/banner_images/cabs_near_me_banner.webp";
import image3 from "@/app/components/HomePageComponents/banner_images/tours_and_travells_bangalore.webp";

const HomeBanner = () => {
  const sliderArray = [image1, image2, image3];

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
              src={slide}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full object-cover 
                         h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]" // 👈 Responsive heights
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </Slider>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
          Chaya Tours & Travels
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 max-w-3xl drop-shadow-md">
          Based in Bengaluru, Chaya Tours & Travels specializes in curated
          domestic & South India tours, seamless travel arrangements, and local
          expertise.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
