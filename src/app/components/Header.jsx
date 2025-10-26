"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { menuName: "Home", href: "/" },
    { menuName: "About", href: "/aboutus" },
    { menuName: "Services", href: "/services" },
    { menuName: "Pricing", href: "/pricing" },
    { menuName: "Packages", href: "/packages" },
    { menuName: "Contact Us", href: "/contactus" },
  ];

  return (
    <header className="shadow-sm w-full">
      {/* Upper Header */}
      <div className="bg-[#e9b100] py-1 sm:py-2">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-2 sm:px-4 text-xs sm:text-sm md:text-base">
          {/* Phone */}
          <a
            href="tel:6363987198"
            className="flex items-center gap-1 sm:gap-2 text-black cursor-pointer hover:text-gray-800"
          >
            <PhoneIcon className="text-black !text-[16px] sm:!text-[18px]" />
            <p className="truncate">6363987198</p>
          </a>

          {/* Email */}
          <a
            href="mailto:pravegowda676@gmail.com"
            className="flex items-center gap-1 sm:gap-2 text-black cursor-pointer hover:text-gray-800"
          >
            <EmailIcon className="text-black !text-[16px] sm:!text-[18px]" />
            <p className="truncate">pravegowda676@gmail.com</p>
          </a>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3">
            <FacebookIcon className="text-black !text-[18px] sm:!text-[20px] cursor-pointer hover:text-gray-800" />
            <InstagramIcon className="text-black !text-[18px] sm:!text-[20px] cursor-pointer hover:text-gray-800" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/assets/chaya_tours_and_travels_bangaluru_logo.png"
              alt="Logo"
              width={110}
              height={55}
              className="w-[90px] sm:w-[110px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center text-base md:text-lg">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#e9b100] transition-colors duration-300"
            >
              <Link href={menuItem.href}>{menuItem.menuName}</Link>
            </li>
          ))}
          <li>
            <Link href="/contactus">
              <button className="text-black cursor-pointer bg-[#e9b100] px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                Book Now
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <CloseIcon style={{ fontSize: 28 }} className="text-black" />
            ) : (
              <MenuIcon style={{ fontSize: 28 }} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-[#e9b100] transition-colors duration-300 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href={menuItem.href}>{menuItem.menuName}</Link>
              </li>
            ))}
            <li>
              <Link href="/contactus">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer w-full text-black bg-[#e9b100] px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Book Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
