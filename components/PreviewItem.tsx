interface Props {
  sectionTitle: string;
  title: string;
  description: string;
}

const PreviewItem = ({ sectionTitle, title, description }: Props) => {
  return (
    <div className="sm:w-screen md:w-6/12 relative mb-5">
      <h1 className="text-center text-2xl underline">{sectionTitle}</h1>
      <div className="flex flex-row p-3">
        <div className="w-full">
          <p className="truncate cursor-pointer mb-1">{title}</p>
          <p className="truncate text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewItem;
