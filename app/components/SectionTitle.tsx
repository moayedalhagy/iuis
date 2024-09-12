type SectionTitleProps = {
  text: string;
};
export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="h-1 w-[25px] self-start bg-[#03A679] md:h-1 md:w-[35px]"></div>
      <h1 className="gradient-text py-3.5 text-2xl font-bold md:text-4xl">
        {text}
      </h1>
    </div>
  );
}
