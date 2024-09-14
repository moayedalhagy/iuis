import Image from "next/image";
import SectionTitle from "./SectionTitle";
import BorderdTextBox from "./BorderdTextBox";
import { OneGoalsSection, TwoGoalsSection, ListGoalsSection } from "../texts";
import GoalLine from "./GoalLine";

export default function Goals() {
  const padding = "px-5 md:px-12";
  return (
    <div className={`bg-[#F5F5F5] mt-6 pt-5   `}>
      {/* title  */}
      <div className={` ${padding}`}>
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
            <p className="text-success font-semibold text-xl mb-3">رؤيتنا:</p>
            <BorderdTextBox text={OneGoalsSection} icon_src={null} />
          </div>
          {/* my message */}
          <div className="w-full md:w-[85%] lg:w-[75%]">
            <p className="text-success font-semibold text-xl mb-3">رسالتنا:</p>
            <BorderdTextBox text={TwoGoalsSection} icon_src={null} />
          </div>
        </div>
      </div>{" "}
      {/* end padding */}
      {/* goals  */}
      <div className="flex flex-col gap-y-10 justify-center items-center mt-3   py-10   px-5 md:px-12">
        <div className="w-full md:w-[85%] lg:w-[75%]   ">
          <p className="text-success font-semibold text-xl mb-3">أهدافنا:</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start   ">
        <div className=" ">
          <Image
            src={"/images/goals_logo.webp"}
            width={"650"}
            height={"150"}
            alt="logo"
            loading="lazy"
          />
        </div>

        <div className=" flex-1 py-2 flex flex-col justify-evenly lg:px-2 gap-y-5   lg:gap-y-0   ">
          {ListGoalsSection.map((item, idx) => {
            return (
              <GoalLine
                key={idx}
                text={item.text}
                img={`/images/id-bg/${idx + 1}.svg`}
                className="md:my-2 w-full md:w-[80%]   "
              />
            );
          })}
        </div>
      </div>
      {/* end goals  */}
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
