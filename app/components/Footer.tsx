"use client";
import Info from "./Footer/Info";

import dynamic from "next/dynamic";

export default function Footer() {
  const Map = dynamic(() => import("./Footer/Map"), {
    ssr: false,
  });
  return (
    <footer className="bg-primary ">
      <div className="flex flex-col md:flex-row px-5 py-2 gap-y-5 gap-x-5">
        <div className="flex-1  ">
          <Info />
        </div>
        <div className="md:w-1/2    h-[180px] bg-red-500 my-2">
          <Map />
        </div>
      </div>

      <p className="text-sm text-center bg-info text-white h-16 flex flex-row justify-center items-center">
        جميع الحقوق محفوظة للجامعة الإسلامية في سوريا &copy; 2024
      </p>
    </footer>
  );
}
