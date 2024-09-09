import Hero from "../components/Sections/Hero";
import Intro from "../components/Sections/Intro";
import Video from "../components/Sections/Video";
import Signin from "../components/Sections/Signin";
import LatestNews from "../components/Sections/LatestNews";
// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage");

  return {
    title: t("title"),
    description: "الجامعة الإسلامية في سوريا",
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <LatestNews />
      <Video />
      <Signin />
    </main>
  );
}
