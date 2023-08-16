import { Header } from "@/components/Header";
import { Shoe } from "@/components/Shoe/Shoe";
import { ContactShadows, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiShoppingBag } from "react-icons/fi";
export default function Home() {
  return (
    <Canvas
      eventPrefix="client"
      camera={{ position: [0, 0, 4], fov: 20 }}
      style={{
        width: "100%",
        height: "100vh",
        display: "block",
      }}
      className="bg-gradient-to-b from-zinc-900 to-black"
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
      <ScrollControls pages={3} damping={0.2} hideScrollbar>
        <Shoe />

        <Scroll html>
          <div className="w-[100vw] px-12 py-6">
            <div className="w-full h-screen relative max-w-[1400px] mx-auto">
              <Header />
              <div className="font-Bayon font-bold absolute bottom-20">
                <h1 className="text-7xl tracking-tight">
                  NIKE <span className="text-pink-500">2023</span>
                </h1>
                <h2 className="mt-4 font-Bayon font-normal text-stroke text-6xl">
                  COLLECTIONS
                </h2>
                <button className="mt-16 text-white font-helvetica font-normal flex gap-2 items-center bg-pink-500 rounded-lg px-6 py-3 hover:brightness-[0.8] transition-[filter]">
                  Shop now
                  <FiShoppingBag size={22} className="stroke-white" />
                </button>
              </div>
            </div>

            <div className="w-full h-screen mt-44 max-w-[1400px] mx-auto">
              <div className="font-Bayon max-w-xl">
                <h1 className="text-7xl tracking-tight">
                  Pegasus 36 Unleash Your Run with
                </h1>
                <p class="mt-8 text-neutral-400 text-xl max-w-md font-medium">
                  Elevate your stride, conquer every mile with Nike's Pegasus
                  36.
                </p>
                <button className="mt-16 text-black font-helvetica font-normal flex gap-2 items-center bg-yellow-400 rounded-lg px-6 py-3 hover:brightness-[0.8] transition-[filter]">
                  Shop now
                  <FiShoppingBag size={22} className="stroke-black" />
                </button>
                <img src="/nike-logo-small.png" alt="" className="mt-16" />
              </div>
            </div>

            <div className="min-h-[100vh]" />
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
