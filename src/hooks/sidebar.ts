"use client";

import { ProjectSidebarItem, ProjectsSidebarResponse } from "@/types/Sidebar";
import { useEffect, useState } from "react";


type UseProjectsSidebarResult = {
  projects: ProjectSidebarItem[];
  isLoading: boolean;
  error: string | null;
};

export function useProjectsSidebar(): UseProjectsSidebarResult {
  const [projects, setProjects] = useState<ProjectSidebarItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/projects", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: ProjectsSidebarResponse = await response.json();

        if (!isMounted) {
          return;
        }

        setProjects(Array.isArray(data.docs) ? data.docs : []);
      } catch (caughtError) {
        if (!isMounted) {
          return;
        }

        const message =
          caughtError instanceof Error
            ? caughtError.message
            : "Something went wrong";

        setError(message);
        setProjects([]);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    projects,
    isLoading,
    error,
  };
}
