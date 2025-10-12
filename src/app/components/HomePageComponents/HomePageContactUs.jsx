import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/Mail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import HomeContactForm from "./HomeContactForm";

const HomePageContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col gap-16">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase text-center font-bold">
          Contact Us
        </h1>
        <p className="text-md sm:text-lg text-center mt-4 text-gray-700">
          Get In Touch
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <p className="text-gray-700 text-base sm:text-lg">
              We’d love to hear from you!
            </p>
          </div>

          <div className="bg-[#e9b100] w-[50%] h-[2px]"></div>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <PhoneAndroidIcon
              style={{ fontSize: 36 }}
              className="border-2 border-amber-400 rounded-full p-2"
            />
            <p className="text-gray-800 text-base sm:text-lg font-medium">
              6363987198
            </p>
          </div>

          <div className="flex items-center gap-4">
            <MailIcon
              style={{ fontSize: 36 }}
              className="border-2 border-amber-400 rounded-full p-2"
            />
            <p className="text-gray-800 text-base sm:text-lg font-medium break-words">
              pravegowda676@gmail.com
            </p>
          </div>

          <div className="flex items-start gap-4">
            <AddLocationAltIcon
              style={{ fontSize: 36 }}
              className="border-2 border-amber-400 rounded-full p-2 flex-shrink-0"
            />
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              No 03, Srinivasa Building, ShivaKuntamma Temple Road, Maithri
              Layout 5th Cross Rd, Whitefield, Bengaluru, Karnataka 560066
            </p>
          </div>

          {/* Map Section */}
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.969568925279!2d77.76613557489304!3d12.97379818734184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d70b1adea8b%3A0x5dd97059105f19e9!2sChaya%20Tours%20and%20Travels!5e0!3m2!1sen!2sin!4v1760257355345!5m2!1sen!2sin"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <HomeContactForm />
        </div>
      </div>
    </div>
  );
};

export default HomePageContactUs;
