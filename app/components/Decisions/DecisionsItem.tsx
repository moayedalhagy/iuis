import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarDays } from "react-icons/fa6";
export default function DecisionsItem() {
  return (
    <Link href={"#"}>
      <div className="card-item mt-1 flex flex-row">
        <div className="content-text flex flex-1 flex-col justify-between ps-2">
          <p className="font-semibold text-primary">
            اللائحة التأديبية الخاصة بالطلاب
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
