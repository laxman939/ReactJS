/* eslint-disable react/no-unknown-property */

import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { OrbitControls } from "@react-three/drei";

// Declarative elements - No need to import (Eg- mesh, planeGeometry.., )
// OrbitControls is not part of three. These are not declarative elements
// The extend function is used to create a new declarative element to react

// OrbitControls can be added in two ways
// 1. using orbitControls from three with the help of extend and useThreefrom fiber
// 2. using drei package

// 1.
extend({ OrbitControls: OrbitControls });

const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();

  // Animation with useFrame hook
  // useState should not be taken with useFrame because of rerendering issues
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // planeRef.current.rotation.z += 2 * delta;

    // console.log(state);
    state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });

  const { gl, camera } = useThree();
  // camera.position.x = -2; // one way of changing camera settings

  return (
    <>
      {/* <mesh position={[-1, 2, 1]} rotation-x={Math.PI * 0.8} scale={0.2}>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh position={[2, 2, 0]} scale={0.7}>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
      <group position={[-2, -1, 0]}>
        <mesh scale={1.5}>
          <torusGeometry />
          <meshNormalMaterial />
        </mesh>
        <mesh scale={1.5} position={[4.5, -0.5, 0]}>
          <torusGeometry />
          <meshNormalMaterial />
        </mesh>
      </group> */}

      <orbitControls args={[camera, gl.domElement]} />

      {/* <OrbitControls /> */}

      <mesh position-x={-1} ref={planeRef}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
      </mesh>
      <mesh position-x={1} ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color="#7A00CA" />
      </mesh>
    </>
  );
};

export default Scene;
