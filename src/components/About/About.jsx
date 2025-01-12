import React, { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the heading as visible after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // delay for the fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            {/* Heading with transition effect */}
            <h2
              className={`text-2xl text-gray-900 font-bold md:text-4xl transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Your Journey Begins at Homex – Crafted for Comfort
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to HOMEX, your home away from home! We’re delighted to
              offer a seamless, convenient, and luxurious online booking
              experience, specially crafted for both leisure and business
              travelers. Our mission is to make every stay exceptional, ensuring
              comfort, convenience, and memorable hospitality.
            </p>
            <p className="mt-4 text-gray-600">
              At HOMEX, we believe in delivering more than just a room – we
              deliver an experience. Our hotel offers a variety of
              accommodations tailored to meet diverse preferences and budgets,
              each equipped with premium amenities, thoughtful touches, and a
              welcoming atmosphere. From cozy single rooms to spacious suites,
              our selection promises something special for every guest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
