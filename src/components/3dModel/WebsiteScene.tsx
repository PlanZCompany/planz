import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MorphingWebsiteRedesign from "./MorphingWebsiteRedesign";

export default function WebsiteScene() {
  return (
    <div className="w-full h-[350px] md:h-[600px] rotate-180">
      <Canvas camera={{ position: [0, 0, 500] }}>
        <ambientLight intensity={0.8} />
        <MorphingWebsiteRedesign />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
