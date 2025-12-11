"use client";

import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

const NUM_PARTICLES = 12000;

type WebsiteParticlesProps = {
  rotationSpeed?: number;
  pointSize?: number;
  thickness?: number; // НОВО: контрол на дебелината
};

export default function WebsiteParticles({
  rotationSpeed = 0.3,
  pointSize = 0.015,
  thickness = 0.2, // пробвай 0.1–0.4
}: WebsiteParticlesProps) {
  const { nodes } = useGLTF("/models/website.gltf") as unknown as {
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

  useEffect(() => {
    const keys = [
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

    const meshes = keys
      .map((key) => nodes[key] as THREE.Mesh | undefined)
      .filter((m): m is THREE.Mesh => !!m);

    if (!meshes.length) return;

    meshes.forEach((m) => m.updateMatrixWorld(true));

    const tempPos = new THREE.Vector3();
    const tempNormal = new THREE.Vector3();
    const positions = new Float32Array(NUM_PARTICLES * 3);

    const sizeVec = new THREE.Vector3();
    const weights = meshes.map((m) => {
      const geo = m.geometry as THREE.BufferGeometry;
      geo.computeBoundingBox();
      geo.boundingBox!.getSize(sizeVec);
      return Math.max(sizeVec.x * sizeVec.y * sizeVec.z, 1e-6);
    });
    const totalWeight = weights.reduce((a, b) => a + b, 0);

    const samplers = meshes.map((mesh) => new MeshSurfaceSampler(mesh).build());

    // random точки + дебелина по нормалата
    for (let i = 0; i < NUM_PARTICLES; i++) {
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

      // offset по нормалата → дебелина
      const offset = (Math.random() - 0.5) * thickness;
      tempPos.addScaledVector(tempNormal, offset);

      const base = i * 3;
      positions[base] = tempPos.x;
      positions[base + 1] = tempPos.y;
      positions[base + 2] = tempPos.z;
    }

    // центрираме целия cloud
    const box = new THREE.Box3();
    const p = new THREE.Vector3();
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const base = i * 3;
      p.set(positions[base], positions[base + 1], positions[base + 2]);
      box.expandByPoint(p);
    }
    const center = new THREE.Vector3();
    box.getCenter(center);
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const base = i * 3;
      positions[base] -= center.x;
      positions[base + 1] -= center.y;
      positions[base + 2] -= center.z;
    }

    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    (attr.array as Float32Array).set(positions);
    attr.needsUpdate = true;
    geometry.computeBoundingSphere();
  }, [nodes, geometry, thickness]);

  useFrame((_, delta) => {
    if (containerRef.current) {
      containerRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  return (
    <group ref={containerRef} scale={[1, 1, 10]}>
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

useGLTF.preload("/models/website.gltf");
