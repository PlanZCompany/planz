import { payloadFind } from "@/lib/payload/client";

type ProjectRelation = string | { id: string };

type ProjectListItem = {
  id: string;
  title: string;
  slug: string;
  tasks?: ProjectRelation[];
  members?: ProjectRelation[];
};

export type ProjectSidebarData = {
  id: string;
  slug: string;
  title: string;
  membersCount: number;
  openTasksCount: number;
};

export async function getProjectsForSidebar(): Promise<ProjectSidebarData[]> {
  const response = await payloadFind<ProjectListItem>("projects", {
    depth: 0,
    limit: 100,
    sort: "title",
  });

  return response.docs.map((project) => ({
    id: String(project.id),
    slug: project.slug,
    title: project.title,
    membersCount: Array.isArray(project.members) ? project.members.length : 0,
    openTasksCount: Array.isArray(project.tasks) ? project.tasks.length : 0,
  }));
}

type RichTextNode = {
  text?: string;
  children?: RichTextNode[];
};

type RichTextValue = {
  root?: {
    children?: RichTextNode[];
  };
};

export type ProjectMember = {
  id: number;
  name: string;
  role: "admin" | "viewer";
  email: string;
};

export type ProjectTask = {
  id: number;
  title: string;
  description: RichTextValue;
  status: "pending" | "review" | "done";
  payStatus: "pending" | "done";
  estimate: RichTextValue;
  comments?: { text: string; id?: string | null }[] | null;
  receivedAt: string;
  members: (number | ProjectMember)[];
  updatedAt: string;
  createdAt: string;
};

export type ProjectIdea = {
  id: number;
  title: string;
  description: RichTextValue;
  updatedAt: string;
  createdAt: string;
};

export type ProjectDetails = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  startedAt?: string | null;
  deadlineAt?: string | null;
  releasedAt?: string | null;
  fullDescription: RichTextValue;
  estimate?: RichTextValue | null;
  ideas?: (number | ProjectIdea)[] | null;
  tasks?: (number | ProjectTask)[] | null;
  members?: (number | ProjectMember)[] | null;
};

type PayloadFindBySlugResponse = {
  docs: ProjectDetails[];
};

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectDetails | null> {
  const payloadApiUrl = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;

  if (!payloadApiUrl) {
    throw new Error("NEXT_PUBLIC_PAYLOAD_API_URL is not defined");
  }

  const searchParams = new URLSearchParams();
  searchParams.set("where[slug][equals]", slug);
  searchParams.set("depth", "2");
  searchParams.set("limit", "1");

  const response = await fetch(
    `${payloadApiUrl}/api/projects?${searchParams.toString()}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch project by slug");
  }

  const data: PayloadFindBySlugResponse = await response.json();

  return data.docs[0] ?? null;
}
