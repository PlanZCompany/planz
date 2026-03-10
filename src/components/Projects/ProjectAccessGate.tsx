"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProjectAccessStore } from "@/store/project-access-store";
import GenericParagraph from "../Generic/GenericParagraph";

type AccessResponse = {
  user?: {
    id: number;
    name: string;
    email: string;
    role: "admin" | "viewer";
  };
  message?: string;
};

export function ProjectAccessGate() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setUser = useProjectAccessStore((state) => state.setUser);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch("/api/project-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = (await response.json()) as AccessResponse;

      if (!response.ok || !data.user) {
        throw new Error(data.message ?? "Invalid access code");
      }

      setUser(data.user);
      window.location.reload();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-card via-card to-cyan-950/10 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Access
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-foreground">
            <GenericParagraph>Enter project access code</GenericParagraph>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your access code to continue to the projects area.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Access code"
            autoComplete="off"
            className="border-border bg-background text-foreground placeholder:text-muted-foreground"
          />

          {error ? <p className="text-sm text-red-400">{error}</p> : null}

          <Button
            type="submit"
            disabled={isSubmitting || !code.trim()}
            className="w-full"
          >
            {isSubmitting ? "Checking..." : "Continue"}
          </Button>
        </form>
      </div>
    </div>
  );
}
