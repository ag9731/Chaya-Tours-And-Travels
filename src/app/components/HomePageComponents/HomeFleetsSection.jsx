"use client";

import sedan from "@/app/components/HomePageComponents/fleets/sedan.png";
import luxurycar from "@/app/components/HomePageComponents/fleets/luxury_car.png";
import suvmuv from "@/app/components/HomePageComponents/fleets/suv_muv.png";
import tempotraveller from "@/app/components/HomePageComponents/fleets/tempo_traveller.png";
import Image from "next/image";
import Link from "next/link";

const HomeFleetsSection = () => {
  const fleets = [
    {
      fleetName: "Sedans",
      fleetImage: sedan,
      fleetDesc:
        "Comfortable and fuel-efficient sedans, ideal for city rides and short trips.",
      fleetPrice: "12/km",
    },
    {
      fleetName: "SUV",
      fleetImage: suvmuv,
      fleetDesc:
        "Spacious and powerful SUVs, perfect for family trips or outstation travel.",
      fleetPrice: "12/km",
    },
    {
      fleetName: "Tempo Travellers / Minibuses",
      fleetImage: tempotraveller,
      fleetDesc:
        "Large vehicles for group travel, tours, or corporate events with ample space.",
      fleetPrice: "12/km",
    },
    {
      fleetName: "Luxury Cars",
      fleetImage: luxurycar,
      fleetDesc:
        "Premium luxury cars for business or leisure travel with style and comfort.",
      fleetPrice: "12/km",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold text-gray-900">
            Our Fleets
          </h1>
          <p className="text-base sm:text-lg mt-4 text-gray-700">
            Choose the perfect vehicle for your journey with Chaya Tours &
            Travels.
          </p>
        </div>

        {/* Fleets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fleets.map((fleet, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-6 py-8 
                         hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Fleet Image */}
              <div className="w-full flex justify-center">
                <Image
                  src={fleet.fleetImage}
                  alt={fleet.fleetName}
                  width={250}
                  height={250}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Fleet Info */}
              <h2 className="text-xl text-center sm:text-2xl font-bold text-[#e9b100] uppercase mt-4">
                {fleet.fleetName}
              </h2>

              <p className="text-gray-700 text-center mt-3 text-sm sm:text-base leading-relaxed">
                {fleet.fleetDesc}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 items-center justify-center mt-6">
                <Link href="/pricing">
                  <button
                    className="cursor-pointer border-2 border-[#e9b100] text-gray-800 font-semibold py-2 px-6 rounded-lg 
                                   hover:bg-[#e9b100] hover:text-white transition-colors duration-300"
                  >
                    Pricing
                  </button>
                </Link>
                <Link href="/contactus">
                  <button
                    className="cursor-pointer border-2 border-[#e9b100] text-gray-800 font-semibold py-2 px-6 rounded-lg 
                                   hover:bg-[#e9b100] hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFleetsSection;
