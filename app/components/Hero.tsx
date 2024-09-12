import Image from "next/image";
import Loading from "../components/Loading";
// bg-green-300 hero text-center pt-20 text-white flex flex-row justify-center items-center gap-3
export default function Hero() {
  return (
    <div className="hero pt-20 text-center w-full   flex flex-col text-white justify-center items-center gap-y-5">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-9 ">
        {" "}
        الجامعة الإسلامية
        <span className="my-7  block"> فـي سـوريـا</span>
      </h1>

      <div className="mt-6 text-lg md:text-xl ">
        <p className="typewriter pb-1">صرح علمي يجمع تخصصات فريـدة</p>
        <p className="  typewriter  pt-1">ضمن بيئة معرفيـة متطورة</p>
      </div>
      <div className="my-8 animate-slideInFromBottom">
        <Image
          src={"/images/logo.svg"}
          width={"150"}
          height={"150"}
          alt="logo"
          loading="lazy"
          placeholder="empty"
        />
      </div>
    </div>
  );
}
