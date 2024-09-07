import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
// type _Link = {
//   href: string;
//   label: string;
//   is_active: boolean;
//   id: number;
// };
// const links: Array<_Link> = [
//   { href: "/home", label: "الرئيسية", is_active: false, id: 1 },
//   { href: "/home", label: "من نحن", is_active: false, id: 2 },
//   { href: "/home", label: "البرامج الأكاديمية", is_active: false, id: 3 },
//   { href: "/home", label: "الكادر التدريسي", is_active: false, id: 4 },
//   { href: "/home", label: "الأخبار", is_active: false, id: 5 },
//   { href: "/home", label: "الأنظمة والقرارات", is_active: false, id: 6 },
// ];

export default function Info() {
  return (
    <div className="text-white  overflow-hidden w-full">
      <div className="    lg:ml-20 p-2 pl-8 flex flex-row border-b-2 border-b-success">
        <Image
          src={"/images/logo.svg"}
          width={"120"}
          height={"140"}
          alt="ok"
          className="mb-2"
        />
        <div className="mx-2 flex-1   flex flex-col justify-end ">
          <div className="flex flex-col justify-between border-r-2 border-r-success    gap-y-1   pr-2 mr-1 mb-2">
            <p className=" text-sm md:text-lg lg:text-lg   pl-10 w-auto">
              <span className="inline-block md:hidden">
                نحو علـمٍ متميـزٍ رصيـن
              </span>
              <span className="hidden md:inline-block">
                نحو علمٍ متميزٍ رصين
              </span>
            </p>
            <div className="flex flex-row gap-x-2 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61565416586068&mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebook className="hover:text-info size-4 md:size-5 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <FaInstagram className="hover:text-info size-4  md:size-5 cursor-pointer" />
              </a>
              <a href="https://youtube.com/@islamic_u1446?si=OAX-MtlGi68bC31o">
                <FaYoutube className="hover:text-info size-4  md:size-5 cursor-pointer" />
              </a>
              <a
                href="https://x.com/iuis_1446?t=c-oKvqP5u5tKeoDJrdt5OQ&s=09"
                target="_blank"
              >
                <FaTwitter className="hover:text-info size-4 md:size-5 cursor-pointer" />
              </a>
              <a href="" target="_blank">
                <FaWhatsapp className="hover:text-info size-4 md:size-5 cursor-pointer" />
              </a>
              <a href="https://t.me/iuis_1446" target="_blank">
                <FaTelegram className="hover:text-info size-4 md:size-5 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*<div>
         <ul className="flex  flex-wrap   justify-between py-2  gap-x-1  gap-y-6">
          {links.map((item) => {
            return (
              <li className="w-1/4 text-sm" key={item.id}>
                {item.label}
              </li>
            );
          })}
        </ul> 
      </div>*/}
    </div>
  );
}
