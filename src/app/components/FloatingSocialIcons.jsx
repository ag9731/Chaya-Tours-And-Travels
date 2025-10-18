"use client";
import { Facebook, Instagram, WhatsApp, Call } from "@mui/icons-material";

const FloatingIcons = () => {
  return (
    <div
      className="
        fixed 
        top-1/2 right-4 
        -translate-y-1/2 
        flex flex-col items-center gap-4 
        z-50
      "
    >
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61552426832299"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-blue-600 text-white rounded-full p-2 
          shadow-lg hover:scale-110 hover:bg-blue-700 transition 
          md:p-3 lg:p-4
        "
      >
        <Facebook className="text-lg md:text-xl lg:text-2xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-full p-2 
          shadow-lg hover:scale-110 hover:opacity-90 transition 
          md:p-3 lg:p-4
        "
      >
        <Instagram className="text-lg md:text-xl lg:text-2xl" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 text-white rounded-full p-2 
          shadow-lg hover:scale-110 hover:bg-green-600 transition 
          md:p-3 lg:p-4
        "
      >
        <WhatsApp className="text-lg md:text-xl lg:text-2xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+918123456789"
        className="
          bg-orange-500 text-white rounded-full p-2 
          shadow-lg hover:scale-110 hover:bg-orange-600 transition 
          md:p-3 lg:p-4
        "
      >
        <Call className="text-lg md:text-xl lg:text-2xl" />
      </a>
    </div>
  );
};

export default FloatingIcons;
