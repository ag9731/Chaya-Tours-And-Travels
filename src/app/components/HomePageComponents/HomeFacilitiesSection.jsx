import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const HomeFacilitiesSection = () => {
  const services = [
    {
      Sicon: (
        <DirectionsCarIcon style={{ fontSize: 40 }} className="text-primary" />
      ),
      Sname: "Local, Outstation & Airport Trips",
      Sdesc:
        "Convenient rides within Bengaluru, nearby cities, or long-distance journeys.",
    },
    {
      Sicon: (
        <BusinessCenterIcon style={{ fontSize: 40 }} className="text-primary" />
      ),
      Sname: "Corporate Travel Solutions",
      Sdesc:
        "Comfortable, reliable transport for business meetings, events, and client visits.",
    },
    {
      Sicon: (
        <AirportShuttleIcon style={{ fontSize: 40 }} className="text-primary" />
      ),
      Sname: "Modern Fleet",
      Sdesc:
        "Well-maintained sedans, SUVs, and tempo travellers for all group sizes.",
    },
    {
      Sicon: <PersonIcon style={{ fontSize: 40 }} className="text-primary" />,
      Sname: "Professional Drivers",
      Sdesc: "Punctual, courteous, and knowledgeable about the best routes.",
    },
    {
      Sicon: (
        <AccessTimeIcon style={{ fontSize: 40 }} className="text-primary" />
      ),
      Sname: "24/7 Service & Transparent Pricing",
      Sdesc:
        "Hassle-free booking, customizable trips, and support whenever you need it.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase text-center font-semibold text-gray-900">
          Our Facilities
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-lg bg-[#e9b100] rounded-2xl p-8 gap-5 
                         transition-all duration-300 hover:scale-105 hover:bg-[#f5d933] hover:shadow-2xl"
            >
              <div className="text-primary transform transition-transform duration-300 hover:scale-110">
                {service.Sicon}
              </div>

              <h2 className="uppercase text-lg sm:text-xl font-bold text-gray-800">
                {service.Sname}
              </h2>

              <div className="bg-white h-[3px] w-[50%] rounded-full"></div>

              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                {service.Sdesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFacilitiesSection;
