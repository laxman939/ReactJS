/* eslint-disable react/no-unknown-property */
import { Html } from "@react-three/drei";
import { useRef } from "react";

const Html_text = () => {
  const cubeRef = useRef();

  return (
    <>
      <mesh position-x={1} ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
        <Html
          position={[-0.6, 0.5, 0.2]}
          wrapperClass="text"
          distanceFactor={10}
          occlude={[cubeRef]} // array of objects
        >
          React developer
        </Html>
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Html_text;
