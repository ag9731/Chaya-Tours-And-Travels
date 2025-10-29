"use client";

import React from "react";
import Link from "next/link";

const PackageSection2 = () => {
  // Array of packages
  const packages = [
    {
      title: "Nandi Hills Trip",
      sedan: "₹3,299",
      suv: "₹4,200 (depends on vehicle)",
    },
    {
      title: "Isha Chikkaballapur Package",
      sedan: "₹3,400",
      suv: "₹4,000 + depends on vehicle",
    },
    {
      title: "Kotilingeshwara Temple One Day Trip",
      sedan: "₹3,499",
      suv: "₹4,200 (depends on vehicle)",
    },
    {
      title: "Bannerghatta National Park Trip",
      sedan: "₹3,200",
      suv: "₹4,000 (depends on vehicle)",
    },
    {
      title: "Mysore Trip 1 Days",
      sedan: "₹6,500",
      suv: "₹6,399 (depends on vehicle)",
    },
    {
        title: "Tirupathi Trip",
        sedan: "₹13 PKM (drive bata 500)",
        suv: "depends on vehicle",
      },
      {
        title: "Madikeri Trip",
        sedan: "₹13 PKM (drive bata 500)",
        suv: "depends on vehicle",
      },
      {
        title: "Ooty Trip",
        sedan: "₹13 PKM (drive bata 500)",
        suv: "depends on vehicle",
      },
      {
        title: "Munnar Trip",
        sedan: "₹13 PKM (drive bata 500)",
        suv: "depends on vehicle",
      },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#e9b100]">Pricing</span> Plans
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Choose from our wide range of comfortable and affordable vehicles.
          Transparent pricing, no hidden charges — perfect for local,
          outstation, and airport trips.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {pkg.title}
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                  <span className="font-medium text-[#e9b100]">Sedan:</span>{" "}
                  {pkg.sedan}
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                  <span className="font-medium text-[#e9b100]">SUV:</span>{" "}
                  {pkg.suv}
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <Link href="/contactus">
              <button className="cursor-pointer mt-6 bg-[#e9b100] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#d1a000] transition-all w-full sm:w-auto">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageSection2;
