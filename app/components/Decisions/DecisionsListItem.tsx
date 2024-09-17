import Image from "next/image";
import DateIcon from "../DateIcon";

export default function DecisionsListItem() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-between gap-x-2">
        <Image
          src="/images/pdf_download_icon.svg"
          alt="download icon"
          width={"30"}
          height={"30"}
        />
        <p className="cursor-pointer select-none hover:text-xl">
          قرار رقم 25 حول آلية التسجيل المعتمدة{" "}
        </p>
      </div>

      <DateIcon date="13 dec 2024" />
    </div>
  );
}
