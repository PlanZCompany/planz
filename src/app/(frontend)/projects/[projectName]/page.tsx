import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/payload/projects";
import { ProjectDetailsTabs } from "@/components/Projects/ProjectDetialsTabs";
import GenericParagraph from "@/components/Generic/GenericParagraph";

type ProjectDetailsPageProps = {
  params: Promise<{
    projectName: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { projectName } = await params;
  const project = await getProjectBySlug(projectName);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-linear-to-br from-card via-card to-cyan-950/10 p-6">
        <div className="text-xs uppercase tracking-[0.25em]">
          <GenericParagraph pType="small" textColor="text-primaryGreen">Project</GenericParagraph>
        </div>
        <h1 className="mt-3 text-3xl font-semibold">{project.title}</h1>
        <div className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          <GenericParagraph>{project.shortDescription}</GenericParagraph>
        </div>
      </div>

      <ProjectDetailsTabs project={project} />
    </div>
  );
}
