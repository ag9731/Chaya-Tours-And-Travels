import car from "@/app/components/AboutUsPageComponents/AboutUsCarImages/car6.webp";
import Image from "next/image";

const HomeAboutUs = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={car}
            alt="Chaya Tours & Travels cab service in Bengaluru"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            About Us
          </h1>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
            Chaya Tours & Travels, based in Bengaluru, offers reliable and
            comfortable cab services for every travel need. Whether you're
            looking for local city rides, outstation trips, airport transfers,
            or corporate travel solutions, we’ve got you covered. Our
            well-maintained fleet includes a wide range of vehicles — from
            sedans and SUVs to tempo travellers — ensuring a smooth journey for
            individuals and groups alike.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
            We pride ourselves on punctuality, safety, and courteous drivers who
            know the routes best. With transparent pricing and 24/7 service
            availability, you can count on us for hassle-free travel anytime. Be
            it a short city errand or a long weekend getaway, Chaya Tours &
            Travels makes every trip comfortable and convenient. Experience
            dependable travel the Bengaluru way — with Chaya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
