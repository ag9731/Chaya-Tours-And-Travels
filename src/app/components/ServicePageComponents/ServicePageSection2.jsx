import React from "react";
import Link from "next/link";
import Image from "next/image";
import bus from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car2.webp";
import car from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car5.webp";
import outstationCar from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car6.webp";
import airportCar from "@/app/components/HomePageComponents/serviceimages/airport_taxi.webp";

const ServicePageSection2 = () => {
  const services = [
    {
      Sname: "Local Cab Service",
      Simage: car,
      Sdesc: [
        "Affordable city rides.",
        "Reliable and safe.",
        "Quick trips within the city.",
        "Comfortable vehicles.",
        "Available 24/7 for your convenience.",
      ],
      Slink: "/local-cab",
    },
    {
      Sname: "Outstation Cab Service",
      Simage: outstationCar,
      Sdesc: [
        "Comfortable long-distance travel.",
        "Safe and professional drivers.",
        "Flexible scheduling for your trips.",
        "Modern and well-maintained vehicles.",
        "Perfect for family and friends journeys.",
      ],
      Slink: "/outstation-cab",
    },
    {
      Sname: "Airport Cab Service",
      Simage: airportCar,
      Sdesc: [
        "Timely airport pickups and drop-offs.",
        "Stress-free travel to catch your flights.",
        "Professional drivers with local knowledge.",
        "Clean and comfortable vehicles.",
        "Available 24/7 for any airport.",
      ],
      Slink: "/airport-cab",
    },
    {
      Sname: "Corporate Cab Service",
      Simage: car,
      Sdesc: [
        "Professional service for corporate needs.",
        "Office pickups and drop-offs.",
        "Event transportation for employees.",
        "Reliable and punctual rides.",
        "Modern vehicles suitable for executives.",
      ],
      Slink: "/corporate-cab",
    },
    {
      Sname: "Tours and Travels Bus",
      Simage: bus,
      Sdesc: [
        "Comfortable buses for group trips.",
        "City tours, pilgrimages, and sightseeing.",
        "Spacious seating and modern amenities.",
        "Safe and reliable travel experience.",
        "Perfect for family or corporate tours.",
      ],
      Slink: "/tours-bus",
    },
  ];

  return (
    <section className="container mx-auto px-5 py-16 space-y-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
        >
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <Image
              src={service.Simage}
              alt={service.Sname}
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {service.Sname}
            </h2>
            <div className="space-y-1 text-gray-600">
              {service.Sdesc.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <Link href="/contactus">
              <button className="mt-auto bg-[#e9b100] text-white cursor-pointer font-semibold py-2 px-4 rounded-lg w-full hover:bg-[#c69700] transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicePageSection2;
