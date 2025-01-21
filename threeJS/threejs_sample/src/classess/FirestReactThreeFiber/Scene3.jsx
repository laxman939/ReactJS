/* eslint-disable react/no-unknown-property */
// loading things should in public folder (Images, model, ...,)
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Scene3 = () => {
  const texture = useLoader(THREE.TextureLoader, "./images/img1.jpg");
  console.log(texture);

  return (
    <>
      <OrbitControls />
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Scene3;
