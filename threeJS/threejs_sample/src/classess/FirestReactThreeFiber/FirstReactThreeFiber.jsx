/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const FirstReactThreeFiber = () => {
  return (
    <Canvas
    // camera={{
    //   fov: 75,
    //   near: 0.1,
    //   far: 100,
    //   // position: [2, 2, 4],
    // }}
    >
      <Scene />
    </Canvas>
  );
};

export default FirstReactThreeFiber;
