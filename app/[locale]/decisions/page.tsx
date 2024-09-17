import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

import DecisionsVerticalSection from "@/app/components/Decisions/DecisionsVerticalSection";
import DecisionsImage from "@/app/components/Decisions/DecisionsImage";
import DecisionsSelect from "@/app/components/Decisions/DecisionsSelect";
import DecisionsListItem from "@/app/components/Decisions/DecisionsListItem";
import Divider from "@/app/components/Divider";

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

            <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4">
              <DecisionsSelect />
              <DecisionsSelect />
              <DecisionsSelect />
              <DecisionsSelect />
            </div>

            <div className="decision-list mt-4">
              <p className="rounded-tl-2xl rounded-tr-2xl bg-gradient-to-l from-[#024059] to-[#0e5875] py-2 text-center text-xl text-white">
                قرارات عامة (متغير حسب الصنف)
              </p>
              <div className="list p-2">
                {[1, 2, 3].map((item, index) => (
                  <>
                    <DecisionsListItem key={index} />
                    <Divider color="bg-red-300" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
