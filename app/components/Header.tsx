"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  type _Link = {
    href: string;
    label: string;
    is_active: boolean;
    id: number;
  };
  const links: Array<_Link> = [
    { href: "/home", label: "الرئيسية", is_active: false, id: 1 },
    { href: "/home", label: "من نحن", is_active: false, id: 2 },
    { href: "/home", label: "البرامج الأكاديمية", is_active: false, id: 3 },
    { href: "/home", label: "الكادر التدريسي", is_active: false, id: 4 },
    { href: "/home", label: "الأخبار", is_active: false, id: 5 },
    { href: "/home", label: "الأنظمة والقرارات", is_active: false, id: 6 },
  ];

  const router = useRouter();

  const tempFlexHeader = "";
  const itemClass =
    "block py-1 px-3 rounded-lg hover:bg-primary hover:shadow   hover:shadow-[0px_0px_2px_0px_#f7fafc]";
  return (
    <header>
      <nav className="py-2  bg-info  shadow-[inset_0px_-0.5px_3px_0px_#ffffff]   ">
        <div className="px-3 md:px-12 max-w-screen  flex flex-wrap md:flex-nowrap items-center justify-between   gap-10   p-2">
          {/* Brand  */}
          <div>
            <Image
              src={"/images/logo_semi.webp"}
              width={"60"}
              height={"60"}
              alt="iuos logo"
              loading="lazy"
            />
          </div>
          {/* end Brand  */}
          <div className=" ">
            <button
              onClick={() =>
                router.push(
                  "https://comparisonreleaseapp.education-syria.com/comparisonapp.apk"
                )
              }
              className="text-md text-nowrap  w-auto  text-white sign_btn_gradient py-2 px-4 rounded-xl  shadow-[0_2px_10px_0_#147CA6]"
            >
              تحميل التطبيق
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
