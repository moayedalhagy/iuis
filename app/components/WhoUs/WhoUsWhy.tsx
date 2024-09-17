import { getTranslations } from "next-intl/server";
import Image from "next/image";
import WhoUsWhyCard from "./WhoUsWhyCard";
import WhouUsWhySliderCard from "./WhouUsWhySliderCard";
export default async function WhoUsWhy() {
  const t = await getTranslations("WhoUsPage");
  return (
    <div className="relative h-[400px] max-h-[400px] overflow-hidden">
      <Image
        src={"/images/who_us_why_bg.webp"}
        alt="background image"
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="content absolute z-20 h-full w-full px-5 py-3 md:px-12">
        <h1 className="text-right text-4xl font-semibold text-white">
          لماذا الجامعة الإسلامية؟
        </h1>
        <div className="mt-10 flex w-full py-5">
          <WhouUsWhySliderCard />
        </div>
      </div>
    </div>
  );
}
