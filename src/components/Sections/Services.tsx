"use client";

import { Locale } from "@/types";
import { WebsiteScene } from "../3dModel";
import { ServicesContent } from "../Custom";
import { useCallback, useState } from "react";
import WebsiteSceneOnView from "../3dModel/WebsiteSceneHolder";

const Services = ({ locale }: { locale: Locale }) => {
  const [currentStatus, setCurrentStatus] = useState<"animation" | "morphing">(
    "animation"
  );
  const setCurrentStatusCallbackHandler = useCallback(
    (status: "animation" | "morphing") => {
      setCurrentStatus(status);
    },
    []
  );
  return (
    <section className="w-full flex pb-10 md:pb-20 scroll-mt-20" id="services">
      <div className="h-full content_wrapper my-auto w-full flex flex-col xl:landscape:flex-row">
        <div className="flex flex-1">
          <div className="w-full h-full pointer-events-none">
            <WebsiteSceneOnView
              currentStatus={currentStatus}
              setCurrentIndexCallbackHandler={setCurrentStatusCallbackHandler}
            />
          </div>
        </div>
        <ServicesContent
          locale={locale}
          setCurrentIndexCallbackHandler={setCurrentStatusCallbackHandler}
        />
      </div>
    </section>
  );
};

export default Services;
