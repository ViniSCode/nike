import { CameraControls } from "@react-three/drei";
import { Shoe } from "./Shoe";

export function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <CameraControls
        autoRotate
        enableRotate={false}
        rotation={[2, 1, 3]}
        enableZoom={false}
      />
      <Shoe />
    </>
  );
}
