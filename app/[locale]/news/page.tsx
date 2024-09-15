import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HeroImage from "@/components/Segments/HeroImage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NewsPage");

  return {
    title: t("title"),
  };
}

export default function News() {
  return (
    <main>
      <HeroImage image={"/images/sho3ib.webp"} title={"الأخبار"} />
    </main>
  );
}
