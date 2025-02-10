/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import * as THREE from "three";

const ModelAnimation = () => {
  return (
    <>
      <ambientLight intensity={4} />
      <OrbitControls />
      {/* <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial side={THREE.DoubleSide} color={"gray"} />
      </mesh> */}
      <Suspense
        fallback={
          // <mesh scale-y={2}>
          //   <boxGeometry />
          //   <meshBasicMaterial wireframe />
          // </mesh>
          <mesh>
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial side={THREE.DoubleSide} color={"gray"} />
          </mesh>
        }
      >
        <Model />
      </Suspense>

      {/* <gridHelper /> */}
    </>
  );
};

export default ModelAnimation;
