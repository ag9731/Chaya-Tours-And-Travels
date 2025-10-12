import React from "react";

const ContactUsBannerSection = () => {
  return (
    <div className="w-full bg-[#e9b100]">
      <div className="container mx-auto flex flex-col gap-5 py-12 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center lg:text-left">
          Get In Touch
        </h1>

        {/* Decorative line */}
        <div className="bg-white h-[2px] w-16 sm:w-24 md:w-32 mx-auto lg:mx-0"></div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-lg max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          Have a question or want to book your next ride? Our team at Chaya
          Tours & Travels is here to assist you 24/7.
        </p>
      </div>
    </div>
  );
};

export default ContactUsBannerSection;
