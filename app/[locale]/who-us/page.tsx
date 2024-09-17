import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";

import HeroImage from "@/components/Segments/HeroImage";
import WhoUsGoals from "@/components/WhoUs/WhoUsGoals";
import WhoUsWhy from "@/app/components/WhoUs/WhoUsWhy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("WhoUsPage");
  return {
    title: t("title"),
  };
}

export default async function WhoUs() {
  const t = await getTranslations("WhoUsPage");
  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"مــن نــحــن"} />
      <div>
        <WhoUsWhy />
        <WhoUsGoals />
      </div>
    </main>
  );
}
