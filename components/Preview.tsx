import PreviewItem from './PreviewItem';

const Preview = () => {
  return (
    <section className="flex justify-around mt-5 text-center">
      <PreviewItem
        sectionTitle="Recent post"
        title="Post title"
        description="Post description"
      />
      <PreviewItem
        sectionTitle="Recent project"
        title="Project title"
        description="Project description"
      />
    </section>
  );
};

export default Preview;
