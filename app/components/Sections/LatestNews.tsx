import { NewsCardType } from "@/app/_types/NewsCardType";
import SectionTitle from "../SectionTitle";
import NewsCard from "../Segments/NewsCard";

const TempString: string = `            في رحاب الإيمان، تنمو الأرواح وتسمو القلوب بالتقوى والصلاح. نستنير
            بنور الهداية من كتاب الله وسنة نبيه الكريم، نسعى للخير ونغرس بذور
            المحبة والرحمة في قلوبنا.`;

const latestNews: Array<NewsCardType> = [
  {
    id: 1,
    title: "اجراء الاختبارات الفصلية",
    body: TempString,
    date: "2024-05-02",
    image: "/images/bg.jpg",
    class: "flex justify-center",
    link: "#",
  },
  {
    id: 2,
    title: "اجراء الاختبارات الفصلية",
    body: TempString,
    date: "2024-05-02",
    image: "/images/bg.jpg",
    class: "flex justify-center",
    link: "#",
  },
  {
    id: 3,
    title: "اجراء الاختبارات الفصلية",
    body: TempString,
    date: "2024-05-02",
    image: "/images/bg.jpg",
    class: "flex justify-center md:col-span-2 lg:col-span-1",
    link: "#",
  },
];

export default function LatestNews() {
  return (
    <div className="mb-3 mt-6 bg-[#F5F5F5] px-5 pb-3 pt-7 md:px-12">
      {/* title  */}
      <SectionTitle text={"آخر الأخبار"} />
      <div className="mt-5 grid grid-cols-1 justify-center gap-y-4 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-0 lg:px-20">
        {latestNews.map((card) => {
          return (
            <div key={card.id} className={`${card.class} `}>
              <NewsCard
                title={card.title}
                body={card.body}
                date={card.date}
                image={card.image}
                link={card.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
