"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import relevant destination images
import nandihills from "@/app/components/PackagePageComponents/assets/nandiHillsView.webp";
import isha from "@/app/components/PackagePageComponents/assets/isha.png";
import kotilingeshwaratemple from "@/app/components/PackagePageComponents/assets/kotilingeshwaratemple.png";
import bannerghatta from "@/app/components/PackagePageComponents/assets/bannerghatta.webp";
import mysorepalace from "@/app/components/PackagePageComponents/assets/mysorepalace.png";
import tirupati from "@/app/components/PackagePageComponents/assets/tirupathi.webp";
import madikeri from "@/app/components/PackagePageComponents/assets/madikeri.webp";
import ooty from "@/app/components/PackagePageComponents/assets/ooty.png";
import munnar from "@/app/components/PackagePageComponents/assets/munnar.webp";

const packages = [
  {
    title: "Nandi Hills Trip",
    image: nandihills,
    sedan: "₹3,299",
    suv: "₹4,200 (depends on vehicle)",
  },
  {
    title: "Isha Chikkaballapur Package",
    image: isha,
    sedan: "₹3,400",
    suv: "₹4,000 + depends on vehicle",
  },
  {
    title: "Kotilingeshwara Temple One Day Trip",
    image: kotilingeshwaratemple,
    sedan: "₹3,499",
    suv: "₹4,200 (depends on vehicle)",
  },
  {
    title: "Bannerghatta National Park Trip",
    image: bannerghatta,
    sedan: "₹3,200",
    suv: "₹4,000 (depends on vehicle)",
  },
  {
    title: "Mysore Trip 1 Day",
    image: mysorepalace,
    sedan: "₹6,500",
    suv: "depends on vehicle",
  },
  {
    title: "Tirupathi Trip",
    image: tirupati,
    sedan: "₹13 PKM (drive bata 500)",
    suv: "depends on vehicle",
  },
  {
    title: "Madikeri Trip",
    image: madikeri,
    sedan: "₹13 PKM (drive bata 500)",
    suv: "depends on vehicle",
  },
  {
    title: "Ooty Trip",
    image: ooty,
    sedan: "₹13 PKM (drive bata 500)",
    suv: "depends on vehicle",
  },
  {
    title: "Munnar Trip",
    image: munnar,
    sedan: "₹13 PKM (drive bata 500)",
    suv: "depends on vehicle",
  },
];

const HomePackagesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 uppercase">
          Our <span className="text-[#e9b100]">Packages</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our most popular one-day and multi-day trips across South
          India.
        </p>
        <h1 className="bg-red-500 p-2 text-white font-bold text-center mt-3">
          For Outstation Trip: Note: Driver bata, toll, parking, inter state
          permit extra. After 10 PM, if the vehicle continues driving,
          additional driver bata will be charged.
        </h1>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-52 sm:h-56 md:h-60 lg:h-64">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h2 className="text-xl font-bold text-[#e9b100] mb-4 text-center">
                {pkg.title}
              </h2>

              <div className="text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                <p className="flex justify-between border-b pb-1">
                  <span className="font-medium text-gray-800">Sedan:</span>
                  <span className="text-[#e9b100] font-semibold">
                    {pkg.sedan}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-gray-800">SUV:</span>
                  <span className="text-[#e9b100] font-semibold">
                    {pkg.suv}
                  </span>
                </p>
              </div>

              <Link href="/contactus">
                <button className="mt-auto cursor-pointer bg-[#e9b100] text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-[#c69700] transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePackagesSection;
