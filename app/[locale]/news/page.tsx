import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import HeroImage from "@/components/Segments/HeroImage";
import NewsCard from "@/app/components/News/NewsCard";
import PaginationControl from "@/app/components/PaginationControl";
import Visuals from "@/app/components/Sections/Visuals";
import NewsVerticalSection from "@/app/components/News/NewsVerticalSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NewsPage");
  return {
    title: t("title"),
  };
}

export default async function News() {
  const t = await getTranslations("NewsPage");
  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"الأخبار"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="contentx flex flex-row lg:gap-x-10">
          {/* vertical section  */}
          <NewsVerticalSection />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <div className="cards-list grid grid-cols-1 gap-1 md:grid-cols-2">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div className="one first:odd:col-span-2">
                  <NewsCard
                    title={
                      "إجراء الاختبــــــــارات الفصلية في حفظ القرآن الكريم"
                    }
                    body={t("temp")}
                    date={"01-01-2023"}
                    image={"/images/temp/big-card.png"}
                    link={"/news/1"}
                  />
                </div>
              ))}
            </div>
            {/* pagiantion control  */}
            <div className="pagination-control my-6 flex flex-row justify-center overflow-hidden">
              <PaginationControl />
            </div>
          </div>
        </div>
      </div>

      <Visuals />
    </main>
  );
}
