import { IdentityIntroSection } from "../../texts";
import BorderdTextBox from "../BorderdTextBox";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
export default function Intro() {
  return (
    <div className="  mt-6 px-5 md:px-12">
      {/* title  */}
      <SectionTitle text={"التعريف بالجامعة الإسلامية"} />

      {/* ss  */}
      {/* w-full md:w-[85%] lg:w-[75%] */}
      <div className=" mt-3 md:mt-4 flex flex-col md:flex-row justify-between  md:gap-y-0  ">
        <p className="text-justify  text-sm md:text-lg  opacity-60 leading-8 ">
          مؤسسة وقفية أكاديمية خاصة غير ربحية أنشئت بمساهمات الواقفين وتبرعاتهم
          برعاية وزارة الأوقاف مركزها مدينة إدلب السورية .
        </p>

        <div className="self-end  lg:ml-40 mt-3">
          <Image
            src={"/images/stars-up.svg"}
            width={"150"}
            height={"150"}
            alt="logo"
          />
        </div>
      </div>

      <div className=" flex flex-col   justify-center items-center mt-3     ">
        <div className="w-full md:w-[85%] lg:w-[75%]">
          <BorderdTextBox text={IdentityIntroSection} icon_src={null} />
        </div>
      </div>
      <div className="hidden self-end  lg:mr-40 my -3">
        <Image
          src={"/images/stars-down.svg"}
          width={"150"}
          height={"150"}
          alt="logo"
        />
      </div>
    </div>
  );
}
