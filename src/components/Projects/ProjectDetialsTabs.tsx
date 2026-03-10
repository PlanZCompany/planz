"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  type ProjectDetails,
  type ProjectIdea,
  type ProjectMember,
  type ProjectTask,
} from "@/lib/payload/projects";
import { extractLexicalText } from "@/lib/lexical/extract-lexical";
import { cn } from "@/lib/utils";
import GenericParagraph from "../Generic/GenericParagraph";

type ProjectDetailsTabsProps = {
  project: ProjectDetails;
};

function formatDate(value?: string | null) {
  if (!value) {
    return "—";
  }

  return new Date(value).toLocaleDateString("bg-BG");
}

function getMembers(items?: (number | ProjectMember)[] | null) {
  return (items ?? []).filter(
    (item): item is ProjectMember => typeof item === "object",
  );
}

function getTasks(items?: (number | ProjectTask)[] | null) {
  return (items ?? []).filter(
    (item): item is ProjectTask => typeof item === "object",
  );
}

function getIdeas(items?: (number | ProjectIdea)[] | null) {
  return (items ?? []).filter(
    (item): item is ProjectIdea => typeof item === "object",
  );
}

function getStatusClasses(status: ProjectTask["status"]) {
  if (status === "done") {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 p-4 font-sansation";
  }

  if (status === "review") {
    return "border-amber-500/30 bg-amber-500/10 text-amber-300 p-4 font-sansation";
  }

  return "border-sky-500/30 bg-sky-500/10 text-sky-300 p-4 font-sansation";
}

function getPayStatusClasses(status: ProjectTask["payStatus"]) {
  if (status === "done") {
    return "border-violet-500/30 bg-violet-500/10 text-violet-300 p-4 font-sansation";
  }

  return "border-rose-500/30 bg-rose-500/10 text-rose-300 p-4 font-sansation";
}

export function ProjectDetailsTabs({ project }: ProjectDetailsTabsProps) {
  const members = getMembers(project.members);
  const tasks = getTasks(project.tasks);
  const ideas = getIdeas(project.ideas);

  return (
    <Tabs
      defaultValue="info"
      className={`${cn("w-full flex flex-col gap-10")}`}
    >
      <TabsList className="mb-6 grid h-auto w-full grid-cols-2 gap-2 rounded-2xl border border-border bg-card/60 p-2 md:grid-cols-4">
        <TabsTrigger
          value="info"
          className="rounded-xl hover:bg-gray-500/20 cursor-pointer p-1"
        >
          <GenericParagraph>Info</GenericParagraph>
        </TabsTrigger>
        <TabsTrigger
          value="estimate"
          className="rounded-xl hover:bg-gray-500/20 cursor-pointer p-1"
        >
          <GenericParagraph>Estimate</GenericParagraph>
        </TabsTrigger>
        <TabsTrigger
          value="tasks"
          className="rounded-xl hover:bg-gray-500/20 cursor-pointer p-1"
        >
          <GenericParagraph>Tasks</GenericParagraph>
        </TabsTrigger>
        <TabsTrigger
          value="ideas"
          className="rounded-xl hover:bg-gray-500/20 cursor-pointer p-1"
        >
          <GenericParagraph>Ideas</GenericParagraph>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="info" className="space-y-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-card via-card to-cyan-950/20 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
              <GenericParagraph>Started</GenericParagraph>

              <p className="mt-2 text-sm font-medium text-primaryDarkGreen/70 font-sansation">
                {formatDate(project.startedAt)}
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
              <GenericParagraph>Deadline</GenericParagraph>

              <p className="mt-2 text-sm font-medium text-primaryDarkGreen/70 font-sansation">
                {formatDate(project.deadlineAt)}
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
              <GenericParagraph>Released</GenericParagraph>

              <p className="mt-2 text-sm font-medium text-primaryDarkGreen/70 font-sansation">
                {formatDate(project.releasedAt)}
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
              <GenericParagraph>Members</GenericParagraph>

              <p className="mt-2 text-sm font-medium text-primaryDarkGreen/70 font-sansation">
                {members.length}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-card p-6 font-sansation">
            <div className="text-xs uppercase tracking-[0.25em]">
              <GenericParagraph pType="small" textColor="text-primaryGreen">
                Project
              </GenericParagraph>
            </div>
            <h2 className="mt-3 text-2xl font-semibold">
              <GenericParagraph>{project.title}</GenericParagraph>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground font-sansation">
              {project.shortDescription}
            </p>

            <div className="mt-6 rounded-2xl border border-border/70 bg-background/40 p-5">
              <GenericParagraph>Full description</GenericParagraph>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-foreground/90 font-sansation">
                {extractLexicalText(project.fullDescription) ||
                  "No description available."}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 font-sansation">
            <div className="text-xs uppercase tracking-[0.25em] font-sansation">
              <GenericParagraph pType="small" textColor="text-primaryGreen">
                Core members
              </GenericParagraph>
            </div>

            <div className="mt-4 space-y-3">
              {members.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                  No members assigned.
                </div>
              ) : (
                members.map((member) => (
                  <div
                    key={member.id}
                    className="rounded-2xl border border-border/70 bg-background/40 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {member.email}
                        </p>
                      </div>

                      <Badge
                        variant="outline"
                        className="border-primaryGreen/20 p-4 bg-cyan-500/10 text-primaryGreen"
                      >
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="estimate">
        <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-card via-card to-violet-950/20 p-6 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
          <GenericParagraph textColor="text-primaryGreen">
            Estimate
          </GenericParagraph>

          <div className="mt-4 rounded-2xl border border-border/70 bg-background/40 p-5">
            <p className="whitespace-pre-wrap text-sm leading-7 text-foreground/90 font-sansation">
              {extractLexicalText(project.estimate) || "No estimate available."}
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="tasks">
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
              No tasks found for this project.
            </div>
          ) : (
            tasks.map((task) => {
              const taskMembers = getMembers(task.members);

              return (
                <div
                  key={task.id}
                  className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-card via-card to-sky-950/10 p-6 shadow-[0_0_30px_rgba(56,189,248,0.06)]"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                      <GenericParagraph>{task.title}</GenericParagraph>
                      <p className="text-sm leading-7 text-muted-foreground font-sansation">
                        {extractLexicalText(task.description) ||
                          "No description available."}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className={getStatusClasses(task.status)}
                      >
                        {task.status}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={getPayStatusClasses(task.payStatus)}
                      >
                        pay: {task.payStatus}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
                      <GenericParagraph>Received at</GenericParagraph>

                      <p className="mt-2 text-sm font-medium text-primaryDarkGreen/70 font-sansation">
                        {formatDate(task.receivedAt)}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
                      <GenericParagraph>Members</GenericParagraph>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {taskMembers.length === 0 ? (
                          <span className="text-sm text-muted-foreground">
                            No members assigned
                          </span>
                        ) : (
                          taskMembers.map((member) => (
                            <Badge
                              key={member.id}
                              variant="outline"
                              className="border-border bg-background/60 text-foreground"
                            >
                              <GenericParagraph
                                pType="small"
                                extraClass="opacity-80"
                              >
                                {member.name}
                              </GenericParagraph>
                            </Badge>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/70 bg-background/40 p-4">
                    <GenericParagraph>Estimate</GenericParagraph>

                    <p className="mt-3 text-sm leading-7 text-foreground/90 font-sansation">
                      {extractLexicalText(task.estimate) ||
                        "No estimate available."}
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/70 bg-background/40 p-4">
                    <GenericParagraph>Comments</GenericParagraph>

                    <div className="mt-3 space-y-2">
                      {task.comments?.length ? (
                        task.comments.map((comment, index) => (
                          <div
                            key={comment.id ?? `${task.id}-${index}`}
                            className="rounded-xl border border-border/60 bg-background/60 p-3 text-sm text-foreground/90 font-sansation"
                          >
                            <GenericParagraph
                              pType="small"
                              extraClass="opacity-80"
                            >
                              {comment.text}
                            </GenericParagraph>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground font-sansation">
                          No comments available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </TabsContent>

      <TabsContent value="ideas">
        <div className="grid gap-4 lg:grid-cols-2">
          {ideas.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
              No ideas found for this project.
            </div>
          ) : (
            ideas.map((idea) => (
              <div
                key={idea.id}
                className="rounded-3xl border border-primaryGreen/20 bg-gradient-to-br from-card via-card
                 to-fuchsia-950/10 p-6 shadow-[0_0_30px_rgba(217,70,239,0.06)]"
              >
                <GenericParagraph extraClass="text-xs uppercase tracking-[0.25em] !font-sansation text-primaryGreen">
                  Idea
                </GenericParagraph>
                <h3 className="mt-3 text-lg font-semibold">
                  <GenericParagraph>
                    {idea.title}
                  </GenericParagraph>
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground font-sansation">
                  {extractLexicalText(idea.description) ||
                    "No description available."}
                </p>
              </div>
            ))
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
