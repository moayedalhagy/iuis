"use client";

import SectionTitle from "./SectionTitle";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  return (
    <div className="bg-white mt-6 pt-5  px-5 md:px-12">
      {/* title  */}

      <SectionTitle text={"التسجيل في الجامعة"} />

      <div className="mt-3 md:mt-4 flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 ">
        <div className="flex-1 flex flex-col   gap-y-10">
          <div className="  text-justify  text-md lg:text-2xl  opacity-60 leading-8">
            <div className="mt-5 "></div>
            فتح التسجيل لعام 2024-2025
            <div className="mt-3"></div>
            <span className="font-semibold opacity-80 ">
              سارع بحجز مقعدك في الجامعة الإسلامية
            </span>
          </div>

          <div className=" md:my-6 lg:my-auto   flex flex-row justify-center ">
            <button
              onClick={() =>
                router.push(
                  "https://comparisonreleaseapp.education-syria.com/comparisonapp.apk"
                )
              }
              className="w-[200px] lg:ml-[10%] lg:self-end text-xs md:text-lg lg:text-2xl  text-white  bg-gradient-to-r from-[#137DA4] to-[#03A579] py-2 px-4 rounded-xl  shadow-[0_2px_10px_0_#147CA6]"
            >
              تحميل التطبيق
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={"/images/chairs.webp"} alt="logo" />
        </div>
      </div>
    </div>
  );
}
