import carporate from "@/app/components/HomePageComponents/serviceimages/carporate_cabs.webp";
import toursandpackages from "@/app/components/HomePageComponents/serviceimages/tours_and_packages.webp";
import vehicleforevents from "@/app/components/HomePageComponents/serviceimages/vehicles_for_events.webp";
import localandoutstation from "@/app/components/HomePageComponents/serviceimages/local_and_outstation.webp";
import airporttaxi from "@/app/components/HomePageComponents/serviceimages/airport_taxi.webp";
import Image from "next/image";

const HomeServices = () => {
  const services = [
    {
      Simage: carporate,
      Sname: "Employee Transportation",
    },
    {
      Simage: airporttaxi,
      Sname: "Airport Pickup Drop",
    },
    {
      Simage: localandoutstation,
      Sname: "Local And Outstation",
    },
    {
      Simage: toursandpackages,
      Sname: "Tour Packages",
    },
    {
      Simage: carporate,
      Sname: "Corporate Cab Facility",
    },
    {
      Simage: vehicleforevents,
      Sname: "Vehicles For Events & Tours",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold text-gray-900">
            Our Services
          </h1>
          <p className="text-base sm:text-lg mt-4 text-gray-700">
            Choose the perfect service for your travel with Chaya Tours &
            Travels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-5
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Service Image */}
              <div className="w-full flex justify-center">
                <Image
                  src={service.Simage}
                  alt={service.Sname}
                  width={300}
                  height={300}
                  className="border-2 border-[#e9b100] rounded-xl object-cover 
                             transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Service Name */}
              <div className="mt-5 uppercase text-center">
                <h2 className="text-md sm:text-lg font-semibold text-gray-800 tracking-wide">
                  {service.Sname}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
