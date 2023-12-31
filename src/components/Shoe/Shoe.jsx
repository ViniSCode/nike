/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\public\models\nike-air-zoom-pegasus-36.glb 
Author: quaz30 (https://sketchfab.com/quaz30)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-air-zoom-pegasus-36-00fd99e778c244c3bd3b65f99dad7cb2
Title: Nike Air Zoom Pegasus 36
*/

import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Shoe(props) {
  const ref = useRef();
  const scroll = useScroll();
  const tl = useRef();
  const { nodes, materials } = useGLTF("./models/nike-air-zoom-pegasus-36.glb");
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    tl.current.seek(scroll.offset * tl.current.duration());
  }, []);

  useLayoutEffect(() => {
    if (tl.current) {
      tl.current.progress(0);
      tl.current.kill();
    }

    // console.log(viewport.width);

    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(ref.current.position, { y: viewport.width / 50 }, 0.2)
      .to(ref.current.rotation, { y: 0.5 }, 0.2);

    tl.current
      .to(ref.current.position, { x: viewport.width / 6 }, 2)
      .to(ref.current.rotation, { y: 2, x: 0, z: 0 }, 2);

    tl.current
      .to(ref.current.position, { x: viewport.width / 3.7 }, 4)
      .to(ref.current.rotation, { y: 2.2, x: 0, z: 0.2 }, 4);

    tl.current
      .to(ref.current.position, { x: viewport.width / 6 }, 7.5)
      .to(ref.current.rotation, { y: 1.5, x: 0.1, z: 0.3 }, 7.5);

    tl.current
      .to(ref.current.position, { x: viewport.width / 7 }, 10)
      .to(ref.current.rotation, { y: 0.2, x: 0.2, z: 0.4 }, 10);

    tl.current
      .to(ref.current.position, { x: 0 }, 13)
      .to(ref.current.rotation, { y: 0.5, x: 0.5, z: 0.4 }, 13);
  }, [viewport.width, tl.current]);

  return (
    <group ref={ref}>
      <mesh
        receiveShadow
        castShadow
        scale={viewport.width < 2.5 ? (viewport.width / 6) * 1.5 : 0.57}
        geometry={nodes.defaultMaterial.geometry}
        material={materials.NikeShoe}
        rotation={[1, 2.3, -0.6]}
        {...props}
      />
    </group>
  );
}

useGLTF.preload("./models/nike-air-zoom-pegasus-36.glb");
