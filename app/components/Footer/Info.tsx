import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
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
            <p className="text-sm md:text-md lg:text-lg">
              نحو علمٍ متميزٍ رصين
            </p>
            <div className="flex flex-row gap-x-4 mt-2">
              <FaFacebook className="hover:text-info size-4 md:size-5 cursor-pointer" />
              <FaInstagram className="hover:text-info size-4  md:size-5 cursor-pointer" />
              <FaTwitter className="hover:text-info size-4 md:size-5 cursor-pointer" />
              <FaWhatsapp className="hover:text-info size-4 md:size-5 cursor-pointer" />
              <FaTelegram className="hover:text-info size-4 md:size-5 cursor-pointer" />
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
