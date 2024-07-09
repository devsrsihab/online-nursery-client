import { TSectionTitleProps } from "../../types";

const SectionTitle = ({
  firstText,
  highlightText,
  lastText,
  detailsText,
}: TSectionTitleProps) => {
  return (
    <div className="capitalize section_header py-10 text-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl ">
        {firstText}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          {highlightText}
        </mark>
        {lastText}
      </h1>
      <p className="text-lg w-1/2 mx-auto font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        {detailsText}
      </p>
    </div>
  );
};

export default SectionTitle;
