import ProjectPage from "@/components/ProjectPage";

const page = async ({ params }: any) => {
  const { slug } = await params;

  return (
    <>
      <ProjectPage slug={slug} />
    </>
  );
};

export default page;
