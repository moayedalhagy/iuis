"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const tempFlexHeader = "";
  const itemClass =
    "block py-1 px-3 rounded-lg hover:bg-primary hover:shadow   hover:shadow-[0px_0px_2px_0px_#f7fafc]";
  return (
    <header>
      <nav className="bg-red-200">
        <div className="px-3 md:px-12 max-w-screen  flex flex-wrap md:flex-nowrap items-center justify-between xl:justify-start gap-10   p-2">
          {/* Brand  */}
          <Image
            src={"/images/logo.svg"}
            width={"40"}
            height={"40"}
            alt="iuos logo"
            loading="lazy"
          />
          {/* end Brand  */}
          <div className="justify-self-end">
            <button className="text-sm text-white sign_btn_gradient py-2 px-3 rounded-lg">
              اضغط للتسجيل
            </button>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            // inline-flex
            className="hidden  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* links  */}

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:mx-10`}
            id="navbar-default"
          >
            <ul className="hidden text-white  flex flex-col md:p-0  gap-3 md:gap-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:justify-evenly ">
              {links.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.href} className={itemClass}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="  ">
                <Link
                  href={"/s"}
                  className="block py-1 px-3 md:rounded-xl md:border hover:bg-primary "
                >
                  البوابة الإلكترونية
                </Link>
              </li>
            </ul>
          </div>
          {/* end links  */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
