"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

// Example images (replace with your actual imports or URLs)
import car1 from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car1.webp";
import car2 from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car2.webp";
import car3 from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car3.webp";
import car4 from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car4.webp";
import car5 from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car5.webp";

const AboutUsSection2 = () => {
  const images = [car1, car2, car3, car4, car5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <section className="container mx-auto px-5 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 1️⃣ Image Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={img}
                  alt={`Car ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* 2️⃣ Text Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Chaya Tours & Travels
          </h2>
          <p className="text-gray-700 leading-relaxed">
            With years of experience in the travel industry, Chaya Tours &
            Travels has built a reputation for reliability and customer
            satisfaction. Our goal is to provide efficient, affordable, and
            comfortable transportation for every need — from airport transfers
            and business travel to family trips and holiday packages. We focus
            on delivering seamless travel experiences through timely service,
            transparent pricing, and personalized attention to each customer.
          </p>

          {/* Book Now Button */}
          <Link href="/contactus">
            <button className="cursor-pointer text-black bg-[#e9b100] px-7 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300 w-max">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection2;
