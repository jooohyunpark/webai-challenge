import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Image } from "@react-three/drei";

import { easing, geometry } from "maath";

extend(geometry);

export const ThreeScene = () => (
  <Canvas style={{ pointerEvents: "inherit" }}>
    <Scene position={[0, 1.5, 0]} />
  </Canvas>
);

function Scene({ children, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(null);

  useFrame((state, delta) => {
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 0.5, state.pointer.y * 0.5 + 6, 8],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref} {...props}>
      <Cards
        from={0}
        len={Math.PI * 2}
        onPointerOver={hover}
        onPointerOut={hover}
      />
    </group>
  );
}

function Cards({
  data,
  from = 0,
  len = Math.PI * 2,
  radius = 5.75,
  onPointerOver,
  onPointerOut,
  ...props
}) {
  const [hovered, hover] = useState(null);
  const amount = Math.round(len * 12);
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {Array.from({ length: amount }, (_, i) => {
        const angle = from + (i / amount) * len;
        return (
          <Card
            key={angle}
            onPointerOver={(e) => (
              e.stopPropagation(), hover(i), onPointerOver(i)
            )}
            onPointerOut={() => (hover(null), onPointerOut(null))}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, Math.PI / 2 + angle, 0]}
            active={hovered !== null}
            hovered={hovered === i}
            url={`/${Math.floor(i % 10) + 1}.png`}
          />
        );
      })}
    </group>
  );
}

function Card({ url, active, hovered, ...props }) {
  const ref = useRef();
  useFrame((state, delta) => {
    const f = hovered ? 1.4 : 1;
    easing.damp3(ref.current.position, [0, hovered ? 0.15 : 0, 0], 0.05, delta);
    easing.damp3(ref.current.scale, [1 * f, 1 * f, 1], 0.08, delta);
  });
  return (
    <group {...props}>
      <Image ref={ref} url={url} fit="contain" side={THREE.DoubleSide} />
    </group>
  );
}
