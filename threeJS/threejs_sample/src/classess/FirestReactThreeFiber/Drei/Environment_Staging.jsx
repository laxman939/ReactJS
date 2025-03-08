/* eslint-disable react/no-unknown-property */
import {
  Cloud,
  OrbitControls,
  Sky,
  Sparkles,
  Stars,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

// Helpers to know the direction of light

const Environment_Staging = () => {
  const lightRef = useRef();
  //   useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls("sky", {
    sunPosition: {
      value: [0, 1, 0],
    },
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight ref={lightRef} castShadow />
      {/* <directionalLight position={[0, 1, 0]} color="white" intensity={4} /> */}

      {/* <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" />
      </mesh> */}

      {/* <Sparkles
        count={400}
        speed={2}
        opacity={3}
        color="#68c2ED"
        scale={[10, 10, 10]}
        size={2}
      /> */}

      {/* <Stars
        radius={20}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Cloud
        opacity={1}
        speed={0.2}
        width={100}
        depth={1.5}
        segments={10}
        depthTest={false}
      /> */}

      <Sky sunPosition={sunPosition} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="#CC3941" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Environment_Staging;
