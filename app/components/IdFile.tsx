"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useState, useEffect } from "react";
import GradientButton from "./GradientButton";
import Link from "next/link";

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
    <div className="bg-[#F5F5F5] pt-5 mt-6 px-5 md:px-12 h-auto lg:py-4  ">
      {/* title  */}
      <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row   justify-start  sm:justify-between  overflow-hidden gap-x-2">
        <div className="">
          <SectionTitle
            text={
              "تخصصات وميزات الجامعة الإسلامية<br/> <br/> في عامها الأول 2024-2025 م"
            }
          />
        </div>

        <div className="self-baseline max-w-1/12">
          <Link href={"/images/id_file_images/id_file.pdf"} className="text-sm">
            <GradientButton text="اضغط للتحميل" />
          </Link>
        </div>
      </div>

      {/* on large screen only */}
      <div className="hidden lg:flex flex-row  gap-x-5 mt-2 ">
        <Image
          src={items[1]}
          // layout=" "
          width={"500"}
          height={"500"}
          alt={`Carousel item 1}`}
          className="flex-1 border-2 border-primary rounded-lg shadow-md shadow-primary "
          loading="lazy"
        />

        <Image
          src={items[0]}
          // layout=" "
          width={"500"}
          height={"500"}
          alt={`Carousel item 1}`}
          className="flex-1 border-2 border-primary rounded-lg shadow-md shadow-primary"
          loading="lazy"
        />
      </div>

      <div className="lg:hidden  mt-5 h-[500px]    ">
        <div
          id="controls-carousel"
          className="relative w-full h-full "
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
                  // width={"600"}
                  // height={"600"}

                  fill={true}
                  alt={`Carousel item ${index + 1}`}
                  className="ml-auto mr-auto"
                  loading="lazy"
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
