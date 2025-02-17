/* eslint-disable react/no-unknown-property */
import {
  Cloud,
  Environment,
  Lightformer,
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

  const { meshIntensity } = useControls("mesh Intensity", {
    meshIntensity: { value: 1, min: 0, max: 5 },
  });

  return (
    <>
      <OrbitControls />
      {/* <ambientLight /> */}
      {/* <directionalLight ref={lightRef} castShadow /> */}
      {/* <directionalLight position={[0, 1, 0]} color="white" intensity={4} /> */}

      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" envMapIntensity={meshIntensity} />
      </mesh>

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

      {/* <Sky sunPosition={sunPosition} /> */}

      {/* Environment can be done in two ways */}
      {/* 1- Using images & 2- using HDR file (polyhaven.com)*/}
      <Environment
        background
        // files={[
        //   "./envMap/px.png",
        //   "./envMap/nx.png",
        //   "./envMap/py.png",
        //   "./envMap/ny.png",
        //   "./envMap/pz.png",
        //   "./envMap/nz.png",
        // ]}

        // files={"./envMap/3.hdr"}
      >
        {/* 1. Lighting using mesh */}
        {/* <mesh position-z={-1} scale={5}>
          <planeGeometry />
          <meshBasicMaterial color="orange" />
        </mesh> */}

        {/*2. Using Lightformer */}
        <Lightformer color="orange" position-z={-1} scale={5} intensity={5} />
      </Environment>

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        {/* <boxGeometry args={[1, 1]} /> */}
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Environment_Staging;
