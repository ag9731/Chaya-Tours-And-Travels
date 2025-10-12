import React from "react";
import Image from "next/image";
import AboutUsBanner from "@/app/components/AboutUsPageComponents/AboutUsBanner/aboutusbanner.webp";

const AboutUsHeroSection = () => {
  return (
    // Banner Section
    <div className="w-full bg-[#e9b100]">
      <div className="container mx-auto flex flex-col gap-5 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center lg:text-left">
          About Us
        </h1>
        <div className="bg-white h-[2px] w-16 sm:w-24 md:w-32 mx-auto lg:mx-0"></div>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          At Chaya Tours & Travels, we’re dedicated to making every journey
          smooth, safe, and memorable. Based in Bengaluru, we provide reliable
          cab services for local, outstation, and airport travel needs. With
          experienced drivers and well-maintained vehicles, we ensure comfort,
          punctuality, and trust in every ride.
        </p>
        {/* Optional Banner Image */}
        {/* <div className="mt-8">
          <Image
            src={AboutUsBanner}
            alt="Chaya Tours & Travels Banner"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
