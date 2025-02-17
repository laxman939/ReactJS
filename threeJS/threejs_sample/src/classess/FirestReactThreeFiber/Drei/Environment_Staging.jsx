/* eslint-disable react/no-unknown-property */
import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Helpers to know the direction of light

const Environment_Staging = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight ref={lightRef} castShadow />
      {/* <directionalLight position={[0, 1, 0]} color="white" intensity={4} /> */}

      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Environment_Staging;
