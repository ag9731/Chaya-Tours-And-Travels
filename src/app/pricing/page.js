import React from "react";
import Image from "next/image";

import marutiErtiga from "@/app/components/PricingPageComponents/assets_car_images/marutiErtiga.png";
import sedenLuxury from "@/app/components/PricingPageComponents/assets_car_images/sedenLuxury.png";
import innovaHybrid from "@/app/components/PricingPageComponents/assets_car_images/innovaHybrid.png";
import kiaCarens from "@/app/components/PricingPageComponents/assets_car_images/kiaCarens.png";
import innova from "@/app/components/PricingPageComponents/assets_car_images/innova.png";
import innovaCrysta from "@/app/components/PricingPageComponents/assets_car_images/innovaCrysta.png";
import Dezire from "@/app/components/PricingPageComponents/assets_car_images/Dezire.png";
import Etios from "@/app/components/PricingPageComponents/assets_car_images/Etios.png";

const carPricing = [
  {
    category: "Sedan Category",
    cars: [
      { name: "Etios", image: Etios },
      { name: "Dzire (New Model)", image: Dezire },
    ],
    details: [
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
    category: "Sedan Luxury",
    cars: [{ name: "Maruti Ciaz", image: sedenLuxury }],
    details: [
      { label: "8 Hours 80 Km", price: "₹2400" },
      { label: "Extra Km", price: "₹15" },
      { label: "Extra Hour", price: "₹150" },
      { label: "Airport Drop/Pick", price: "₹1200 + Toll" },
    ],
  },
  {
    category: "Innova",
    cars: [{ name: "Toyota Innova", image: innova }],
    details: [
      { label: "4 Hours 40 Km", price: "₹1800" },
      { label: "8 Hours 80 Km", price: "₹2900" },
      { label: "Extra Km", price: "₹18" },
      { label: "Extra Hour", price: "₹180" },
      { label: "Outstation", price: "₹17/km" },
      { label: "Driver Bata", price: "₹500" },
      { label: "Airport Drop/Pick", price: "₹1900 + Toll" },
    ],
  },
  {
    category: "MPV Category",
    cars: [
      { name: "Maruti Ertiga", image: marutiErtiga },
      { name: "Kia Carens", image: kiaCarens },
    ],
    details: [
      { label: "4 Hours 40 Km", price: "₹1600" },
      { label: "Extra Km", price: "₹18" },
      { label: "Extra Hour", price: "₹180" },
      { label: "Outstation", price: "₹16/km" },
      { label: "Driver Bata", price: "₹400" },
      { label: "Airport Drop/Pick", price: "₹1800 + Toll" },
    ],
  },
  {
    category: "Innova Crysta",
    cars: [{ name: "Innova Crysta", image: innovaCrysta }],
    details: [
      { label: "8 Hours 80 Km", price: "₹3400" },
      { label: "Extra Km", price: "₹20" },
      { label: "Extra Hour", price: "₹200" },
      { label: "Outstation", price: "₹20/km" },
      { label: "Driver Bata", price: "₹500" },
      { label: "Airport Drop/Pick", price: "₹2200 + Toll" },
    ],
  },
  {
    category: "Innova Hybrid",
    cars: [{ name: "Innova Hybrid", image: innovaHybrid }],
    details: [
      { label: "8 Hours 80 Km", price: "₹3800" },
      { label: "Extra Km", price: "₹20" },
      { label: "Extra Hour", price: "₹200" },
      { label: "Outstation", price: "₹20/km" },
      { label: "Driver Bata", price: "₹500" },
      { label: "Airport Drop/Pick", price: "₹2400 + Toll" },
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 lg:px-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#e9b100]">Pricing</span> Plans
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose from our wide range of comfortable and affordable vehicles.
          Transparent pricing, no hidden charges — perfect for local,
          outstation, and airport trips.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {carPricing.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-[#e9b100] mb-4 text-center">
                {section.category}
              </h2>

              {/* Car Images */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {section.cars.map((car, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-44 h-28 relative">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700 mt-2">
                      {car.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing Table */}
              <table className="w-full text-sm md:text-base">
                <tbody>
                  {section.details.map((item, i) => (
                    <tr
                      key={i}
                      className={`${
                        i % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                      } text-gray-800`}
                    >
                      <td className="py-2 px-3 font-medium">{item.label}</td>
                      <td className="py-2 px-3 text-right font-semibold text-[#e9b100]">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Book Now Button */}
            <div className="p-6 pt-0 flex justify-center">
              <button className="bg-[#e9b100] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c69700] transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
