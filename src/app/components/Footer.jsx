"use client";
import Link from "next/link";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#e9b100] shadow-sm py-10 mt-10">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* 1️⃣ About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-black">About Us</h2>
          <p className="text-sm text-gray-800 mb-4">
            At Chaya Tours & Travels, we offer reliable and affordable cab
            services for local, outstation, and airport trips. Your journey, our
            responsibility.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Instagram fontSize="medium" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Facebook fontSize="medium" />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-black">Quick Links</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-white transition-colors duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-black">Contact Us</h2>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📞</span> +91 63639 87198
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📧</span> pravegowda676@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📍</span> Bengaluru, Karnataka
            </li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Facebook fontSize="medium" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Instagram fontSize="medium" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-800 mt-8 px-5 border-t border-white/20 pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Chaya Tours & Travels</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
