"use client";

import { useEffect, useRef, useState } from "react";
import { WebsiteSceneLazy } from "./WebsiteSceneLazy";

export default function WebsiteSceneOnView({
  currentStatus,
  setCurrentIndexCallbackHandler,
}: {
  currentStatus: "animation" | "morphing";
  setCurrentIndexCallbackHandler: (status: "animation" | "morphing") => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" } // start loading before it enters view
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show ? (
        <WebsiteSceneLazy
          currentStatus={currentStatus}
          setCurrentIndexCallbackHandler={setCurrentIndexCallbackHandler}
        />
      ) : null}
    </div>
  );
}
