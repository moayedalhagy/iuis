import Image from "next/image";
import Link from "next/link";
import DateIcon from "../DateIcon";
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

          <DateIcon date="12 nov 2023" />
        </div>
      </div>
    </Link>
  );
}
