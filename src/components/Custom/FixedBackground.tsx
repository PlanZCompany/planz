import GenericVideo from "../Generic/GenericVideo";

const FixedBackground = () => {
  return (
    <div className="z-[-1] inset-0 fixed">
      <div className="inset-0 absolute bg-[#27d47f] z-3 mix-blend-color"></div>
      <div className="inset-0 absolute bg-black/40 z-4"></div>
      <GenericVideo
        src="/video/background.mp4"
        wrapperClassName="absolute inset-0 z-2"
        playbackRate={0.5}
      />
    </div>
  );
};

export default FixedBackground;
