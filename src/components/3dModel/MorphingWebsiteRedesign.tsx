"use client";

import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

const NUM_PARTICLES = 60000;

const HOLD_DURATION = 9;
const MORPH_DURATION = 1;
// const TOTAL_DURATION = HOLD_DURATION + MORPH_DURATION;

type MorphProps = {
  rotationSpeed?: number;
  pointSize?: number;
  thickness?: number;
  scale?: THREE.Vector3Tuple;
  currentStatus?: "animation" | "morphing";
  setCurrentIndexCallbackHandler: (status: "animation" | "morphing") => void;
};

const WEBSITE_KEYS = [
  "mesh_0",
  "mesh_1",
  "mesh_2",
  "mesh_3",
  "mesh_4",
  "mesh_5",
  "mesh_6",
  "mesh_7",
  "mesh_8",
];

const REDESIGN_KEYS = [
  "mesh_0",
  "mesh_1",
  "mesh_2",
  "mesh_3",
  "mesh_4",
  "mesh_5",
  "mesh_6",
  "mesh_7",
];

const SEO_KEYS = ["mesh_0", "mesh_1", "mesh_2", "mesh_3"];

const INTEGRATIONS_KEYS = [
  "mesh_0",
  "mesh_1",
  "mesh_2",
  "mesh_3",
  "mesh_4",
  "mesh_5",
  "mesh_6",
  "mesh_7",
  "mesh_8",
  "mesh_9",
  "mesh_10",
  "mesh_11",
];

const MODERN_KEYS = [
  "mesh_0",
  "mesh_1",
  "mesh_2",
  "mesh_3",
  "mesh_4",
  "mesh_5",
  "mesh_6",
  "mesh_7",
  "mesh_8",
  "mesh_9",
  "mesh_10",
  "mesh_11",
  "mesh_12",
  "mesh_13",
  "mesh_14",
  "mesh_15",
  "mesh_16",
];

function generatePointCloudFromNodes(
  nodes: Record<string, THREE.Mesh>,
  meshKeys: string[],
  numParticles: number,
  thickness: number
): Float32Array {
  const meshes = meshKeys
    .map((key) => nodes[key] as THREE.Mesh | undefined)
    .filter((m): m is THREE.Mesh => !!m);

  if (!meshes.length) return new Float32Array(numParticles * 3);

  meshes.forEach((m) => m.updateMatrixWorld(true));

  const tempPos = new THREE.Vector3();
  const tempNormal = new THREE.Vector3();
  const sizeVec = new THREE.Vector3();

  const weights = meshes.map((m) => {
    const geo = m.geometry as THREE.BufferGeometry;
    geo.computeBoundingBox();
    geo.boundingBox!.getSize(sizeVec);
    return Math.max(sizeVec.x * sizeVec.y * sizeVec.z, 1e-6);
  });
  const totalWeight = weights.reduce((a, b) => a + b, 0);

  const samplers = meshes.map((mesh) => new MeshSurfaceSampler(mesh).build());

  const positions = new Float32Array(numParticles * 3);

  for (let i = 0; i < numParticles; i++) {
    let r = Math.random() * totalWeight;
    let idx = 0;
    for (let j = 0; j < samplers.length; j++) {
      r -= weights[j];
      if (r <= 0) {
        idx = j;
        break;
      }
    }

    samplers[idx].sample(tempPos, tempNormal);
    const offset = (Math.random() - 0.5) * thickness;
    tempPos.addScaledVector(tempNormal, offset);

    const base = i * 3;
    positions[base] = tempPos.x;
    positions[base + 1] = tempPos.y;
    positions[base + 2] = tempPos.z;
  }

  const box = new THREE.Box3();
  const p = new THREE.Vector3();
  for (let i = 0; i < numParticles; i++) {
    const base = i * 3;
    p.set(positions[base], positions[base + 1], positions[base + 2]);
    box.expandByPoint(p);
  }
  const center = new THREE.Vector3();
  box.getCenter(center);
  for (let i = 0; i < numParticles; i++) {
    const base = i * 3;
    positions[base] -= center.x;
    positions[base + 1] -= center.y;
    positions[base + 2] -= center.z;
  }

  return positions;
}

export default function MorphingWebsiteRedesign({
  rotationSpeed = 0.3,
  pointSize = 0.015,
  thickness = 0.2,
  scale = [1, 1, 10],
  currentStatus = "animation",
  setCurrentIndexCallbackHandler,
}: MorphProps) {
  const websiteGltf = useGLTF("/models/website.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };
  const redesignGltf = useGLTF("/models/redesign.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };
  const seoGltf = useGLTF("/models/seo.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };
  const integrationsGltf = useGLTF("/models/integrations.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };
  const modernGltf = useGLTF("/models/modern.gltf") as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };

  const containerRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(new Float32Array(NUM_PARTICLES * 3), 3)
    );
    return geo;
  }, []);

  const targetsRef = useRef<Float32Array[]>([]);
  const currentIndexRef = useRef(0);
  const nextIndexRef = useRef(1);
  const timeRef = useRef(0); // секунди в текущия цикъл

  useEffect(() => {
    const websitePoints = generatePointCloudFromNodes(
      websiteGltf.nodes,
      WEBSITE_KEYS,
      NUM_PARTICLES,
      thickness
    );

    const redesignPoints = generatePointCloudFromNodes(
      redesignGltf.nodes,
      REDESIGN_KEYS,
      NUM_PARTICLES,
      thickness
    );

    const seoPoints = generatePointCloudFromNodes(
      seoGltf.nodes,
      SEO_KEYS,
      NUM_PARTICLES,
      thickness
    );

    const integrationsPoints = generatePointCloudFromNodes(
      integrationsGltf.nodes,
      INTEGRATIONS_KEYS,
      NUM_PARTICLES,
      thickness
    );

    const modernPoints = generatePointCloudFromNodes(
      modernGltf.nodes,
      MODERN_KEYS,
      NUM_PARTICLES,
      thickness
    );

    targetsRef.current = [
      websitePoints,
      redesignPoints,
      seoPoints,
      integrationsPoints,
      modernPoints,
    ];

    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    (attr.array as Float32Array).set(websitePoints);
    attr.needsUpdate = true;
    geometry.computeBoundingSphere();

    currentIndexRef.current = 0;
    nextIndexRef.current = 1;
    timeRef.current = 0;
  }, [
    websiteGltf.nodes,
    redesignGltf.nodes,
    seoGltf.nodes,
    integrationsGltf.nodes,
    modernGltf.nodes,
    geometry,
    thickness,
  ]);

  useFrame((_, delta) => {
    if (containerRef.current) {
      containerRef.current.rotation.y += rotationSpeed * delta;
    }

    const targets = targetsRef.current;
    if (targets.length < 2) return;

    const a = targets[currentIndexRef.current];
    const b = targets[nextIndexRef.current];
    if (!a || !b) return;

    timeRef.current += delta;
    let time = timeRef.current;

    if (currentStatus === "morphing") {
      setCurrentIndexCallbackHandler("animation");
      timeRef.current = 0;
      time = 0;
      currentIndexRef.current = nextIndexRef.current;
      nextIndexRef.current = (nextIndexRef.current + 1) % targets.length;
      return;
    }

    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const len = NUM_PARTICLES * 3;

    if (time <= HOLD_DURATION) {
      for (let i = 0; i < len; i++) {
        arr[i] = a[i];
      }
    } else {
      const morphT = Math.min((time - HOLD_DURATION) / MORPH_DURATION, 1);
      for (let i = 0; i < len; i++) {
        arr[i] = a[i] + (b[i] - a[i]) * morphT;
      }
    }

    attr.needsUpdate = true;
  });

  return (
    <group ref={containerRef} scale={scale}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={pointSize}
          color="#ffffff"
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// useGLTF.preload("/models/website.gltf");
// useGLTF.preload("/models/redesign.gltf");
// useGLTF.preload("/models/seo.gltf");
// useGLTF.preload("/models/integrations.gltf");
// useGLTF.preload("/models/modern.gltf");
