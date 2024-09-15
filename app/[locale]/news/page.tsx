 import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
 

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NewsPage");

  return {
    title: t("title")
  };
}

export default function News() {
  return (
    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex, eos ratione id aliquam esse sit fugit nesciunt, debitis deserunt error exercitationem voluptate in omnis nemo. Reprehenderit perspiciatis iusto explicabo?
    </main>
  );
}
