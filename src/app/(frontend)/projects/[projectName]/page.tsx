import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/payload/projects'
import { ProjectDetailsTabs } from '@/components/Projects/ProjectDetialsTabs'

type ProjectDetailsPageProps = {
  params: Promise<{
    projectName: string
  }>
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { projectName } = await params
  const project = await getProjectBySlug(projectName)

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-linear-to-br from-card via-card to-cyan-950/10 p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Project</p>
        <h1 className="mt-3 text-3xl font-semibold">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          {project.shortDescription}
        </p>
      </div>

      <ProjectDetailsTabs project={project} />
    </div>
  )
}