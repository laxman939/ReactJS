/* eslint-disable react/no-unknown-property */
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

const ImperativeAPI = () => {
  const [click, setClick] = useState(false);

  const textureTwo = useTexture("./texture/moon.jpeg");

  // //   Case-1
  //   const { scale, color } = useSpring({
  //     //   const spring = useSpring({
  //     from: { scale: click ? 1.3 : 1.6 },
  //     // to: {scale: 0}
  //     scale: click ? 1.6 : 1.3, // It will take as to only
  //     color: !click ? "#ede7d8" : "#f2f1ed",
  //   });
  //   // scale can be any name

  //   const clickHandler = () => {
  //     setClick(!click);
  //   };

  //   Imperative API jhelps us to avoid rerenders
  // Case-2 - using Imperative API -- go throuh the controller

  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const clickHandler = () => {
    api.start({
      to: { x: spring.x.get() === 1 ? 0 : 1 },
    });
  };

  console.log("render", spring);

  return (
    <>
      <ambientLight intensity={5} />

      <OrbitControls
        autoRotate
        // maxAzimuthAngle={Math.PI / 3} // Limit horizontal rotation
        // minAzimuthAngle={-Math.PI / 4}
        // maxPolarAngle={Math.PI / 2} // Limit vertical rotation
        // minPolarAngle={Math.PI / 4} // Prevent viewing from below
        enableZoom={true}
        enablePan={true}
        rotateSpeed={0.5}
      />
      <animated.mesh
        onDoubleClick={clickHandler}
        // scale={scale} case-1
        position-y={spring.x}
      >
        {/* <boxGeometry /> */}
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={textureTwo}
          //   color="white"
          roughness={0.5}
          metalness={0.3}
        />
        {/* animated is required for children element also */}
      </animated.mesh>
    </>
  );
};

export default ImperativeAPI;
