import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MorphingWebsiteRedesign from "./MorphingWebsiteRedesign";
import { Suspense } from "react";

export default function WebsiteScene({
  currentStatus,
  setCurrentIndexCallbackHandler,
}: {
  currentStatus: "animation" | "morphing";
  setCurrentIndexCallbackHandler: (status: "animation" | "morphing") => void;
}) {
  return (
    <div className="w-full h-[350px] md:h-[600px] rotate-180">
      <Canvas
        camera={{ position: [0, 0, 500] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />

        <Suspense fallback={null}>
          <MorphingWebsiteRedesign
            currentStatus={currentStatus}
            setCurrentIndexCallbackHandler={setCurrentIndexCallbackHandler}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
