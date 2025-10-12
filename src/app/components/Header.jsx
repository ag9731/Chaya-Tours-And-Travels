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
    { menuName: "Contact Us", href: "/contactus" },
  ];

  return (
    <header className="shadow-sm w-full">
      {/* Upper Header */}
      <div className="bg-[#e9b100] py-2">
        <div className="container mx-auto flex justify-between items-center px-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <PhoneIcon className="text-black" />
            <p className="hidden sm:block">6363987198</p>
          </div>
          <div className="flex items-center gap-2">
            <EmailIcon className="text-black" />
            <p className="hidden sm:block">pravegowda676@gmail.com</p>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <FacebookIcon className="text-black" />
            <InstagramIcon className="text-black" />
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
              width={120}
              height={60}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#e9b100] transition-colors duration-300"
            >
              <Link href={menuItem.href}>{menuItem.menuName}</Link>
            </li>
          ))}
          <li>
            <button className="text-black bg-[#e9b100] px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <CloseIcon style={{ fontSize: 30 }} className="text-black " />
            ) : (
              <MenuIcon style={{ fontSize: 30 }} className="text-black " />
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
                className="cursor-pointer hover:text-[#e9b100] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                <Link href={menuItem.href}>{menuItem.menuName}</Link>
              </li>
            ))}
            <li>
              <button className="w-full text-black bg-[#e9b100] px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
