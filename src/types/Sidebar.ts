export type ProjectSidebarItem = {
  id: string
  title: string
  membersCount: number
  openTasksCount: number
}

export type ProjectsSidebarResponse = {
  docs: ProjectSidebarItem[]
}