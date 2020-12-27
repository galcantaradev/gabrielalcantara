interface Props {
  sectionTitle: string;
  title: string;
  description: string;
}

const PreviewItem = ({ sectionTitle, title, description }: Props) => {
  return (
    <div className="w-6/12 relative p-5 max-h-52">
      <h1 className="text-center absolute top-0 left-0 right-0 text-2xl underline">
        {sectionTitle}
      </h1>
      <div className="flex flex-row p-10">
        <div className="w-full">
          <p className="truncate cursor-pointer mb-1">{title}</p>
          <p className="truncate text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewItem;
