import { NewsCardType } from "@/app/_types/NewsCardType";
import { FaRegCalendarDays, FaShareNodes } from "react-icons/fa6";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import Divider from "../Divider";

export default function NewsCardExtended({
  title,
  body,
  date,
  image,
  //views
  //news_link_for_share
}: Omit<NewsCardType, "link">) {
  return (
    <div>
      {/* shadow rounded-lg border border-gray-200  */}
      <div className="overflow-hidden bg-white">
        {/* news image  */}
        <Image
          className="max-h-[312px] rounded-t-lg"
          src={image}
          alt="card image"
          layout={"responsive"}
          width={"50"}
          height={"50"}
        />

        <div className="p-5">
          {/* icon section  */}
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
        </div>
      </div>
    </div>
  );
}
