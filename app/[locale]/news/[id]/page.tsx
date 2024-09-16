import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

import NewsVerticalSection from "@/app/components/Segments/NewsVerticalSection";
import NewsCardExtended from "@/app/components/Segments/NewsCardExtended";
import Divider from "@/app/components/Divider";
import Image from "next/image";
import NewsItem from "@/app/components/Segments/NewsItem";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NewsPage");
  return {
    title: t("title"),
  };
}

export default async function SingleNews({
  params,
}: {
  params: { id: string };
}) {
  const t = await getTranslations("NewsPage");
  return (
    <main className="bg-neutral-100">
      <HeroImage image={"/images/sho3ib.webp"} title={"الأخبار"} />
      <div className="px-5 pt-7 md:px-12">
        <div className="content flex flex-row lg:gap-x-10">
          {/* vertical section  */}
          <NewsVerticalSection />

          {/* cards section  */}
          <div className="card-section flex-1 overflow-hidden rounded-lg bg-white px-3 pt-7">
            <div className="w-full">
              <NewsCardExtended
                title={"إجراء الاختبــــــــارات الفصلية في حفظ القرآن الكريم"}
                body={t("temp")}
                date={"01-01-2023"}
                image={"/images/temp/big-card.png"}
              />

              <Divider color="bg-red-300" />

              {/* related media  */}
              <div className="div">
                <p className="text-2xl text-success">{t("related_media")}</p>
                <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <div className="rounded-xl">
                      <Image
                        src={"/images/temp/big-card.png"}
                        alt="kk"
                        layout="responsive"
                        width={"50"}
                        height={"50"}
                        className="rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Divider color="bg-red-300" />

              <div className="related-news p-1">
                <p className="text-2xl text-success">{t("related_news")}</p>
                <div className="mt-3 flex flex-col gap-y-5 md:flex-row md:gap-x-5 md:gap-y-0">
                  <NewsItem />
                  <NewsItem />
                  <NewsItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
