import Image from "next/image";
import SectionTitle from "./SectionTitle";
import BorderdTextBox from "./BorderdTextBox";
import { OneGoalsSection, TwoGoalsSection, ListGoalsSection } from "../texts";
export default function Goals() {
  return (
    <div className="bg-[#F5F5F5] mt-6 pt-5  px-5 md:px-12">
      {/* title  */}

      <SectionTitle text={"هوية الجامعة الإسلامية"} />

      <div className="mt-3 md:mt-4 flex flex-col md:flex-row justify-between  md:gap-y-0  ">
        <p className="text-justify  text-sm md:text-lg  opacity-60 leading-8">
          تتطلع الجامعة الإسلامية إلى تحقيق رؤيا ورسالة طموحة نوجز ملامحها
          الأساسية في الآتي:
        </p>

        <div className="self-end  lg:ml-40 mt-6">
          <Image
            src={"/images/stars-up.svg"}
            width={"150"}
            height={"150"}
            alt="logo"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-10 justify-center items-center mt-3   py-10  ">
        {/* my Vision */}
        <div className="w-full md:w-[85%] lg:w-[75%]">
          <p className="text-success font-semibold text-2xl mb-3">الرؤية:</p>
          <BorderdTextBox text={OneGoalsSection} icon_src={null} />
        </div>
        {/* my message */}
        <div className="w-full md:w-[85%] lg:w-[75%]">
          <p className="text-success font-semibold text-2xl mb-3">الرسالة:</p>
          <BorderdTextBox text={TwoGoalsSection} icon_src={null} />
        </div>

        {/* Goals */}

        <div className="w-full md:w-[85%] lg:w-[75%]  ">
          <p className="text-success font-semibold text-2xl mb-3">الأهداف:</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 mt-14">
            {/* ListGoalsSection */}
            {ListGoalsSection.map((item, idx) => {
              return (
                <BorderdTextBox
                  key={idx}
                  text={item.text}
                  icon_src={item.icon_src}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden self-end  lg:mr-40 my-3">
        <Image
          src={"/images/stars-down.svg"}
          width={"150"}
          height={"150"}
          alt="logo"
          loading="lazy"
        />
      </div>
    </div>
  );
}
