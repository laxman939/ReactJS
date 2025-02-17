/* eslint-disable react/no-unknown-property */
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Helpers to know the direction of light

const Camera = () => {
  const cubeRef = useRef();

  useFrame((_, delta) => {
    // cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.z += delta;
  });

  return (
    <>
      <OrbitControls />
      {/* <ambientLight /> */}
      <Environment background files={"./envMap/4.hdr"} />
      {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} /> */}
      <CubeCamera resolution={1024}>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>

      <mesh ref={cubeRef} position-z={9}>
        <boxGeometry args={[4, 4]} />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Camera;
