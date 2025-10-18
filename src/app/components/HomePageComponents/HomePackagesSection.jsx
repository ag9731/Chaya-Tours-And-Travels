"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import chickmagaluru from "@/app/components/PackagePageComponents/assets/chikamagaluru.png";
import kotilingeshwaratemple from "@/app/components/PackagePageComponents/assets/kotilingeshwaratemple.png";
import mysorepalace from "@/app/components/PackagePageComponents/assets/mysorepalace.png";
import ooty from "@/app/components/PackagePageComponents/assets/ooty.png";
import isha from "@/app/components/PackagePageComponents/assets/isha.png";

const packages = [
  {
    name: "Chikmagaluru Trip",
    image: chickmagaluru,
    pricing: [
      { label: "4 Hours 40 Km", price: "₹1200" },
      { label: "8 Hours 80 Km", price: "₹2200" },
      { label: "Extra Km", price: "₹15" },
      { label: "Extra Hour", price: "₹150" },
      { label: "Outstation", price: "₹13/km (Min 300 Km)" },
      { label: "Driver Bata", price: "₹400" },
      { label: "Airport Drop/Pick", price: "₹1100 + Toll" },
    ],
  },
  {
    name: "Kotilingeshwara Temple Trip",
    image: kotilingeshwaratemple,
    pricing: [
      { label: "4 Hours 40 Km", price: "₹1500" },
      { label: "8 Hours 80 Km", price: "₹2400" },
      { label: "Extra Km", price: "₹20" },
      { label: "Extra Hour", price: "₹200" },
      { label: "Driver Bata", price: "₹500" },
      { label: "Airport Drop/Pick", price: "₹1200 + Toll" },
    ],
  },
  {
    name: "Mysore Palace Trip",
    image: mysorepalace,
    pricing: [
      { label: "4 Hours 40 Km", price: "₹1600" },
      { label: "8 Hours 80 Km", price: "₹2900" },
      { label: "Extra Km", price: "₹18" },
      { label: "Extra Hour", price: "₹180" },
      { label: "Outstation", price: "₹16/km" },
      { label: "Driver Bata", price: "₹400" },
      { label: "Airport Drop/Pick", price: "₹1800 + Toll" },
    ],
  },
  {
    name: "Ooty Trip",
    image: ooty,
    pricing: [
      { label: "4 Hours 40 Km", price: "₹1200" },
      { label: "8 Hours 80 Km", price: "₹2200" },
      { label: "Extra Km", price: "₹15" },
      { label: "Extra Hour", price: "₹150" },
      { label: "Outstation", price: "₹13/km (Min 300 Km)" },
      { label: "Driver Bata", price: "₹400" },
      { label: "Airport Drop/Pick", price: "₹1100 + Toll" },
    ],
  },
  {
    name: "Isha Chikkaballapur Trip",
    image: isha,
    pricing: [
      { label: "4 Hours 40 Km", price: "₹1300" },
      { label: "8 Hours 80 Km", price: "₹2300" },
      { label: "Extra Km", price: "₹15" },
      { label: "Extra Hour", price: "₹150" },
      { label: "Outstation", price: "₹13/km (Min 300 Km)" },
      { label: "Driver Bata", price: "₹400" },
      { label: "Airport Drop/Pick", price: "₹1100 + Toll" },
    ],
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
          Explore our most popular trips and travel packages across South India.
        </p>
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
                alt={pkg.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h2 className="text-xl font-bold text-[#e9b100] mb-4 text-center">
                {pkg.name}
              </h2>

              <ul className="mb-4 space-y-2 text-gray-700 text-sm sm:text-base">
                {pkg.pricing.map((item, i) => (
                  <li key={i} className="flex justify-between border-b pb-1">
                    <span>{item.label}</span>
                    <span className="font-semibold text-[#e9b100]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contactus">
                <button className="mt-4 bg-[#e9b100] text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-[#c69700] transition duration-300">
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
