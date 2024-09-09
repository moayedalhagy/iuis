"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useState, useEffect } from "react";

export default function IdFile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "/images/id_file_images/2.jpg",
    "/images/id_file_images/1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 15 * 1000); // تغيير الصورة كل15  ثوانٍ

    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };
  return (
    <div className="bg-white mt-6 px-5 md:px-12 h-[560px] sm:h-[980px] overflow-hidden">
      {/* title  */}
      <SectionTitle text={"الملف التعريفي"} />
      <div className="  flex flex-row justify-center items-center h-full pt-6 ">
        <div
          id="controls-carousel"
          className="relative w-full h-full   "
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-full  overflow-hidden rounded-lg  flex flex-row justify-center     ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start   absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                data-carousel-item={index === activeIndex ? "active" : ""}
              >
                <Image
                  src={item}
                  // layout=" "
                  width={"600"}
                  height={"600"}
                  objectFit="cover"
                  alt={`Carousel item ${index + 1}`}
                  className="ml-auto mr-auto"
                />
              </div>
            ))}
          </div>
          {/* Slider controls */}
          {/* previw button  */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full   cursor-pointer group focus:outline-none"
            data-carousel-prev=""
            onClick={goToPrevious}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full     bg-gray-200 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-success   rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          {/* nexy button  */}
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full   cursor-pointer group focus:outline-none"
            data-carousel-next=""
            onClick={goToNext}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full  bg-gray-200   group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-success rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
