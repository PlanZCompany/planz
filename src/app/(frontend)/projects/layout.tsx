import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { getProjectsForSidebar } from '@/lib/payload/projects'
import type { ProjectAccessUser } from '@/store/project-access-store'
import { ProjectAccessGate } from '@/components/Projects/ProjectAccessGate'
import { ProjectAccessStoreSync } from '@/components/Projects/ProjectAccessStoreSync'
import { ProjectLogoutButton } from '@/components/Projects/ProjectLogout'
import { ProjectsSidebar } from '@/components/SIdebar/ProjectSidebar'

type ProjectsLayoutProps = {
  children: ReactNode
}

function parseProjectAccessCookie(value: string): ProjectAccessUser | null {
  try {
    const parsed = JSON.parse(value) as ProjectAccessUser

    if (
      typeof parsed?.id === 'number' &&
      typeof parsed?.name === 'string' &&
      typeof parsed?.email === 'string' &&
      (parsed?.role === 'admin' || parsed?.role === 'viewer')
    ) {
      return parsed
    }

    return null
  } catch {
    return null
  }
}

export default async function ProjectsLayout({ children }: ProjectsLayoutProps) {
  const cookieStore = await cookies()
  const accessCookie = cookieStore.get('project-access')
  const user = accessCookie?.value
    ? parseProjectAccessCookie(accessCookie.value)
    : null

  if (!user) {
    return <ProjectAccessGate />
  }

  const projects = await getProjectsForSidebar()

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <ProjectAccessStoreSync user={user} />
        <ProjectsSidebar projects={projects} />

        <SidebarInset className="bg-background">
          <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-sidebar-border bg-sidebar/95 px-4 backdrop-blur">
            <div className="flex items-center">
              <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" />
              <div className="ml-3">
                <p className="text-sm font-medium text-sidebar-foreground">
                  Projects
                </p>
              </div>
            </div>

            <ProjectLogoutButton />
          </header>

          <main className="min-h-[calc(100vh-56px)] bg-background p-4">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}