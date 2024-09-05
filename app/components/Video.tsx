import SectionTitle from "./SectionTitle";
export default function Video() {
  return (
    <div className="bg-white mt-6 px-5 md:px-12">
      {/* title  */}
      <SectionTitle text={"الفيديو التعريفي"} />
      <div className="mt-5 flex flex-row justify-center items-center gap-y-5  lg:px-20">
        <div className="flex-1 rounded-lg  my-2  overflow-hidden flex flex-row justify-center">
          <iframe
            className="rounded-xl border-0 outline-0"
            width="853"
            height="480"
            src="https://www.youtube.com/embed/QmJoBPk3Nnk"
            title="المقدمة التعريفية للجامعة الإسلامية"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
