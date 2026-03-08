"use client";

import { useEffect } from "react";
import {
  type ProjectAccessUser,
  useProjectAccessStore,
} from "@/store/project-access-store";

type ProjectAccessStoreSyncProps = {
  user: ProjectAccessUser | null;
};

export function ProjectAccessStoreSync({ user }: ProjectAccessStoreSyncProps) {
  const setUser = useProjectAccessStore((state) => state.setUser);
  const clearUser = useProjectAccessStore((state) => state.clearUser);

  useEffect(() => {
    if (user) {
      setUser(user);
      return;
    }

    clearUser();
  }, [user, setUser, clearUser]);

  return null;
}
