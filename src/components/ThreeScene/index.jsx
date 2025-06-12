import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Image } from "@react-three/drei";

import { easing, geometry } from "maath";

extend(geometry);

export const ThreeScene = () => (
  <Canvas
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
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
      [-state.pointer.x, state.pointer.y + 6, 8],
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
  radius = 5.25,
  onPointerOver,
  onPointerOut,
  ...props
}) {
  const [hovered, hover] = useState(null);
  const amount = Math.round(len * 22);
  return (
    <group {...props}>
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
    const f = hovered ? 1.3 : 1;
    easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta);
    easing.damp3(ref.current.scale, [1 * f, 1 * f, 1], 0.15, delta);
  });
  return (
    <group {...props}>
      <Image
        ref={ref}
        transparent
        url={url}
        fit="contain"
        side={THREE.DoubleSide}
      />
    </group>
  );
}
