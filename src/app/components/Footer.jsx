import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#e9b100] shadow-sm py-10 mt-10">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* 1️⃣ About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-sm text-gray-800 mb-4">
            We provide reliable, affordable, and comfortable travel experiences
            for our valued customers. Your journey, our responsibility.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Instagram fontSize="medium" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Facebook fontSize="medium" />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📞</span> +91 98765 43210
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span>📧</span> info@example.com
            </li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a
              href="#"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Facebook fontSize="medium" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-white transition-colors duration-300"
            >
              <Instagram fontSize="medium" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-800 mt-8 px-5">
        © {new Date().getFullYear()} Chaya Tors And Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
