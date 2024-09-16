import { NewsCardType } from "@/app/_types/NewsCardType";
import NewsCardButton from "../NewsCardButton";
import { FaRegCalendarDays, FaShareNodes } from "react-icons/fa6";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";

export default function NewsCard({
  title,
  body,
  date,
  image,
  link,
}: NewsCardType) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
        <Image
          className="max-h-[312px] rounded-t-lg"
          src={image}
          alt="card image"
          layout={"responsive"}
          width={"50"}
          height={"50"}
        />

        <div className="p-5">
          <div className="small-text my-3 flex flex-row items-baseline justify-between">
            <div className="flex">
              {/* News date  */}

              <p className="me-4 flex flex-row items-baseline gap-x-2 text-sm">
                {/* Icon  */}
                <FaRegCalendarDays className="text-info" />
                {/* text  */}
                <span className="text-secondary">{date}</span>
              </p>
              {/* News views  */}
              <p className="flex flex-row items-baseline gap-x-2 text-sm">
                {/* Icon  */}
                <FaRegEye className="text-info" />

                {/* text  */}
                <span className="text-secondary">236</span>
              </p>
            </div>

            {/* News share  */}
            <p className="flex flex-row items-baseline gap-x-2 self-end text-sm">
              {/* Icon  */}
              <FaShareNodes className="text-info" />

              {/* text  */}
              <span className="baseline text-secondary">{"مشاركة"}</span>
            </p>
          </div>
          {/* Card Title  */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            {title}
          </h5>
          {/* End Card Title  */}

          {/* Card description */}
          <p className="mb-3 mt-4 line-clamp-3 font-normal leading-8 text-gray-700 dark:text-gray-400">
            {body}
          </p>
          {/* End description */}

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
