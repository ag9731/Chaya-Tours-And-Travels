"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const HomeContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    drop: "",
    service: "",
    vehicle: "",
    pickupDate: "",
    pickupTime: "",
    email: "",
    phone: "",
    landmark: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setMessage("Your enquiry has been sent successfully!");
          setFormData({
            name: "",
            pickup: "",
            drop: "",
            service: "",
            vehicle: "",
            pickupDate: "",
            pickupTime: "",
            email: "",
            phone: "",
            landmark: "",
          });
        },
        (error) => {
          console.error(error);
          setMessage("Failed to send enquiry. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full py-10 px-5 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Contact Us for Booking
        </h2> */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-3 rounded-md w-full"
            required
          />

          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="border p-3 rounded-md w-full"
            required
          />

          <input
            type="text"
            name="drop"
            value={formData.drop}
            onChange={handleChange}
            placeholder="Drop Location"
            className="border p-3 rounded-md w-full"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          >
            <option value="">Select Service</option>
            <option>Airport Drop</option>
            <option>Airport Pickup</option>
            <option>Airport to Airport Transfer</option>
            <option>Local</option>
            <option>Trip</option>
            <option>Trip Package</option>
          </select>

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          >
            <option value="">Select Vehicle</option>
            <option>Indica AC</option>
            <option>Etios Dizer</option>
            <option>Swift Dizer</option>
            <option>Ertiga AC</option>
            <option>Innova Crysta</option>
            <option>Innova AC</option>
            <option>Innova Hybrid AV</option>
            <option>Tempo Traveller Non AC</option>
            <option>Tempo Traveller AC</option>
          </select>

          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          />

          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-3 rounded-md w-full"
            required
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-3 rounded-md w-full"
            required
          />

          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Nearby Landmark"
            className="border p-3 rounded-md w-full md:col-span-2"
          />

          <button
            type="submit"
            className="bg-[#fb5831] text-white py-3 rounded-md hover:bg-[#e04d29] transition duration-300 md:col-span-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4 text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default HomeContactForm;
