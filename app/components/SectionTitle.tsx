type SectionTitleProps = {
  text: string;
};
export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="h-1 md:h-1 self-start w-[25px] md:w-[35px]  bg-[#03A679]"></div>
      <h1
        className="text-2xl md:text-4xl  gradient-text py-1 font-bold pb-4 leading-8 bg-red-500"
        dangerouslySetInnerHTML={{ __html: text }}
      ></h1>
    </div>
  );
}
