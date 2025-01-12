import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2
              ref={headingRef}
              className={`text-4xl font-bold text-red-500 sm:text-5xl transition-opacity duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Homex – Crafted for Comfort
              <span className="hidden sm:block text-4xl text-green-500">
                Homex
              </span>
            </h2>
            <p
              ref={paragraphRef}
              className={`px-4 max-w-2xl mx-auto text-justify flex transition-opacity duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Welcome to Homex – Your Home Away from Home Nestled in the heart
              of Jalgaon, Homex offers a blend of comfort, luxury, and
              exceptional service that caters to travelers seeking an
              unforgettable stay. Whether you're here for business, leisure, or
              a special event, we provide the perfect sanctuary to unwind and
              indulge in a truly unique experience.
            </p>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://cdn.pixabay.com/photo/2019/07/08/04/23/traveling-4323759_640.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://cdn.pixabay.com/photo/2014/07/05/08/21/pool-384573_640.jpg"
          alt="image2"
        />
      </div>

      <p
        className={`text-center text-2xl sm:text-2xl py-10 font-medium transition-opacity duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        "Welcome to Homex – where every room offers a blend of comfort, stunning
        views, and an ambiance that leaves a lasting impression. Here, every
        stay is designed to make your journey memorable and truly special."
      </p>
    </div>
  );
}
