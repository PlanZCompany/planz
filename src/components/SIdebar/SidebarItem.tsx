'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type ProjectSidebarItemProps = {
  slug: string
  title: string
  membersCount: number
  openTasksCount: number
  isActive?: boolean
}

export function ProjectSidebarItem({
  slug,
  title,
  membersCount,
  openTasksCount,
  isActive = false,
}: ProjectSidebarItemProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        'block rounded-xl border p-3 transition-all',
        'border-sidebar-border bg-sidebar-accent/40 text-sidebar-foreground',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        isActive && 'border-sidebar-ring bg-sidebar-accent text-sidebar-accent-foreground shadow-sm',
      )}
    >
      <div className="space-y-3">
        <p className="line-clamp-1 text-sm font-semibold">{title}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Badge
            className="border-sidebar-border bg-transparent text-sidebar-foreground"
            variant="outline"
          >
            {membersCount} members
          </Badge>

          <Badge
            className="border-sidebar-border bg-sidebar-primary/15 text-sidebar-foreground"
            variant="outline"
          >
            {openTasksCount} open tasks
          </Badge>
        </div>
      </div>
    </Link>
  )
}