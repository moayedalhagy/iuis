import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarDays, FaShareNodes } from "react-icons/fa6";
export default function NewsItem() {
  return (
    <Link href={"#"}>
      <div className="card-item mt-1 flex flex-row">
        <div className="relative h-20 w-[140px] max-w-[140px] rounded-xl">
          <Image
            src="/images/sho3ib.webp"
            alt=""
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="content-text flex flex-1 flex-col justify-between ps-2">
          <p className="font-semibold text-primary">
            إجراء الاختبــــــــارات الفصلية
          </p>

          <p className="me-4 flex flex-row items-baseline gap-x-2 text-sm">
            {/* Icon  */}
            <FaRegCalendarDays className="text-info" />
            {/* text  */}
            <span className="text-secondary">{"12 nov 2023"}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
