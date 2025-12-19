// WebsiteSceneLazy.tsx
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import WebsiteScene from "./WebsiteScene";

export type WebsiteSceneProps = ComponentProps<typeof WebsiteScene>;

export const WebsiteSceneLazy = dynamic<WebsiteSceneProps>(
  () => import("./WebsiteScene"),
  {
    ssr: false,
    loading: () => <div className="w-full h-[350px] md:h-[600px]" />,
  }
);
