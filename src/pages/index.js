import { Shoe } from "@/components/Shoe";
import { ContactShadows, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  return (
    <Canvas
      eventPrefix="client"
      camera={{ position: [0, 0, 4], fov: 35 }}
      style={{ width: "100%", height: "100vh" }}
      className="min-w-full min-h-full bg-gradient-to-b from-zinc-900 to-black relative"
    >
      <ambientLight intensity={2.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />

      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      {/* <Selector> */}
      <ScrollControls pages={3} damping={0.25}>
        <Shoe rotation={[1, 2.3, -0.6]} />

        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <img
            src="./assets/layout-idea.png"
            className="w-full min-h-[100vh]"
          />
          <img
            src="./assets/layout-idea-2.png"
            className="w-full min-h-[100vh]"
          />
          <img
            src="./assets/layout-idea-3.png"
            className="w-full min-h-[100vh]"
          />
        </Scroll>
      </ScrollControls>
      {/* </Selector> */}
    </Canvas>
  );
}
