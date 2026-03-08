'use client'

import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar'
import type { ProjectSidebarData } from '@/lib/payload/projects'
import { ProjectSidebarItem } from './SidebarItem'

type ProjectsSidebarProps = {
  projects: ProjectSidebarData[]
}

export function ProjectsSidebar({ projects }: ProjectsSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 text-xs font-medium uppercase tracking-wide text-sidebar-foreground/60">
            Projects
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <div className="space-y-2 p-2">
              {projects.length === 0 ? (
                <div className="rounded-xl border border-sidebar-border bg-sidebar-accent/30 p-3 text-sm text-sidebar-foreground/70">
                  No projects found.
                </div>
              ) : null}

              {projects.map((project) => (
                <ProjectSidebarItem
                  key={project.id}
                  slug={project.slug}
                  title={project.title}
                  membersCount={project.membersCount}
                  openTasksCount={project.openTasksCount}
                  isActive={pathname === `/projects/${project.slug}`}
                />
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}