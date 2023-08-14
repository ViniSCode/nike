import { Header } from "@/components/Header";
import { Shoe } from "@/components/Shoe/Shoe";
import { ContactShadows, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas
      eventPrefix="client"
      camera={{ position: [0, 0, 4], fov: 20 }}
      style={{
        width: "100%",
        height: "100vh",
        overflowX: "hidden",
      }}
      className="bg-gradient-to-b from-zinc-900 to-black relative"
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
      <ScrollControls pages={3} damping={0.3}>
        <Shoe />

        <Scroll html>
          <div className="relative">
            <Header />
          </div>
          <div className="w-full min-h-[100vh]" />
          <div className="w-full min-h-[100vh]" />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
