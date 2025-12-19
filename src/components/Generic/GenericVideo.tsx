"use client";

import React, { useEffect, useMemo, useRef } from "react";

function shouldDisableAutoplay() {
  const nav = navigator as unknown as { connection?: { saveData?: boolean } };
  const saveData = !!nav.connection?.saveData;
  const reduced =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  return saveData || reduced;
}

const GenericVideo = ({
  wrapperClassName,
  poster = "/video/background-poster.avif",
  style = { transformOrigin: "center center" },
  videoClassName = "w-full h-full object-cover",
  muted = true,
  playbackRate = 1,
}: {
  wrapperClassName: string;
  poster?: string;
  style?: React.CSSProperties;
  videoClassName?: string;
  muted?: boolean;
  playbackRate?: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const disableAutoplay = useMemo(() => {
    if (typeof window === "undefined") return false;
    return shouldDisableAutoplay();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.playbackRate = playbackRate;

    // If autoplay is enabled, try to start (some browsers need an explicit play())
    if (!disableAutoplay) {
      v.play().catch(() => {});
    }
  }, [muted, playbackRate, disableAutoplay]);

  return (
    <div className={wrapperClassName}>
      <video
        className={videoClassName}
        ref={videoRef}
        style={style}
        playsInline
        loop
        muted={muted}
        poster={poster}
        preload="metadata"
        autoPlay={!disableAutoplay}
      >
        {!disableAutoplay && (
          <>
            <source
              src="/video/background-mobile.mp4"
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source
              src="/video/background-desktop.mp4"
              type="video/mp4"
              media="(min-width: 769px)"
            />
          </>
        )}
      </video>
    </div>
  );
};

export default GenericVideo;
