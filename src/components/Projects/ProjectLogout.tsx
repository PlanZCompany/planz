"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useProjectAccessStore } from "@/store/project-access-store";
import GenericParagraph from "../Generic/GenericParagraph";

export function ProjectLogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const clearUser = useProjectAccessStore((state) => state.clearUser);

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/project-logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      clearUser();
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleLogout}
      disabled={isLoading}
      className="border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer"
    >
      <GenericParagraph>
        {isLoading ? "Logging out..." : "Logout"}
      </GenericParagraph>
    </Button>
  );
}
