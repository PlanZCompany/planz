"use client";

import React, { useEffect, useRef } from "react";

const GenericVideo = ({
  wrapperClassName,
  src,
  style = {
    transformOrigin: "center center",
  },
  videoClassName = "w-full h-full object-cover",
  muted = true,
  playbackRate = 1,
}: {
  wrapperClassName: string;
  src: string;
  style?: React.CSSProperties;
  videoClassName?: string;
  muted?: boolean;
  playbackRate?: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.playbackRate = 0.5;
    }
  }, [videoRef, muted, playbackRate]);

  return (
    <div className={wrapperClassName}>
      <video
        width={"100%"}
        height={"100%"}
        autoPlay={true}
        loop={true}
        src={src}
        muted={true}
        style={style}
        playsInline={true}
        className={videoClassName}
        ref={videoRef}
      />
    </div>
  );
};

export default GenericVideo;
