import PreviewItem from './PreviewItem';

const Preview = () => {
  return (
    <section className="flex flex-col sm:flex-col md:flex-row lg:flex-row mt-5 text-center">
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
