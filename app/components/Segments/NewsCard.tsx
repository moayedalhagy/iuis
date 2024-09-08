import { NewsCardType } from "@/app/_types/NewsCardType";
import NewsCardButton from "../NewsCardButton";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function NewsCard({
  title,
  body,
  date,
  image,
  link,
}: NewsCardType) {
  return (
    <div>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
        <img className="rounded-t-lg" src={image} alt="card image" />

        <div className="p-5">
          {/* Card Title  */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            {title}
          </h5>
          {/* End Card Title  */}

          {/* Card description */}
          <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
            {body}
          </p>
          {/* End description */}

          {/* News date  */}
          <p className="mt-1 flex flex-row gap-x-2 text-sm">
            {/* Icon  */}
            <FaRegCalendarDays className="text-info" />

            {/* text  */}
            <span className="text-secondary">{date}</span>
          </p>
          {/* End News date  */}

          {/* Card Button  */}
          <div className="flex flex-row justify-end">
            <NewsCardButton text="قراءة الخبر" link={link} />
          </div>
          {/* Card Button  */}
        </div>
      </div>
    </div>
  );
}
