"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { value: 250, suffix: "+", label: "Vehicles" },
  { value: 4500, suffix: "+", label: "Users" },
  { value: 1500, suffix: "+", label: "Trips" },
  { value: 9, suffix: "", label: "Years of Experience" },
];

const AboutUsCountSection = () => {
  return (
    <div className="bg-yellow-400 py-14 px-2">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-y-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-[180px] max-w-[250px] mx-4 text-center"
          >
            <span className="block text-4xl sm:text-5xl font-bold text-black mb-2">
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
                enableScrollSpy
              />
            </span>
            <span className="block text-lg font-medium text-black uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCountSection;
