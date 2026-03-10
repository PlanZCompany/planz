"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import GenericParagraph from "../Generic/GenericParagraph";

type ProjectSidebarItemProps = {
  slug: string;
  title: string;
  membersCount: number;
  openTasksCount: number;
  isActive?: boolean;
};

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
        "block rounded-xl border p-3 transition-all",
        "border-sidebar-border bg-sidebar-accent/40 text-sidebar-foreground",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        isActive &&
          "border-sidebar-ring bg-sidebar-accent text-sidebar-accent-foreground shadow-sm",
      )}
    >
      <div className="space-y-3">
        <div className="line-clamp-1 text-sm font-semibold">
          <GenericParagraph>{title}</GenericParagraph>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge
            className="border-sidebar-border bg-transparent text-sidebar-foreground font-sansation"
            variant="outline"
          >
            {membersCount} members
          </Badge>

          <Badge
            className={`${cn("border-sidebar-border bg-primaryDarkBlue text-sidebar-foreground font-sansation")}`}
            variant="outline"
          >
            {openTasksCount} open tasks
          </Badge>
        </div>
      </div>
    </Link>
  );
}
