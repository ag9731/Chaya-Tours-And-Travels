import React from "react";
import {
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import HomeContactForm from "../HomePageComponents/HomeContactForm";

const ContactUsPageSection2 = () => {
  return (
    <section className="container mx-auto px-5 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column - Contact Form */}
        <div className="w-full">
            <HomeContactForm/>
        </div>

        {/* Right Column - Contact Info */}
        <div className="bg-[#e9b100] rounded-xl shadow-md p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>

          <div className="space-y-3 text-gray-800">
            <p className="flex items-center gap-2">
              <LocationOn /> 1401 21st Street, Suite R, Sacramento, CA 95811
            </p>
            <p className="flex items-center gap-2">
              <Phone /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Email /> info@example.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-800 hover:text-white transition">
                <Facebook />
              </a>
              <a href="#" className="text-gray-800 hover:text-white transition">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPageSection2;
