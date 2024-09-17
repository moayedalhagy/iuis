import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

import DecisionsVerticalSection from "@/app/components/Decisions/DecisionsVerticalSection";
import DecisionsImage from "@/app/components/Decisions/DecisionsImage";
import DecisionsSelect from "@/app/components/Decisions/DecisionsSelect";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("DecisionsPage");
  return {
    title: t("title"),
  };
}

export default async function News() {
  const t = await getTranslations("DecisionsPage");
  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"الأنظمة والقرارات"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="contentx flex flex-row lg:gap-x-10">
          {/* vertical section  */}
          <DecisionsVerticalSection />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <DecisionsImage
              image={"/images/sho3ib.webp"}
              title={"قرارات مجلــــس التعليم العالي"}
            />

            <div className="flex flex-row filter">
              <DecisionsSelect />
              <DecisionsSelect />
              <DecisionsSelect />
              <DecisionsSelect />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
