/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import ParticlesScene from "./ParticlesScene";
import ModelAnimation from "./ModelAnimation";
import { Perf } from "r3f-perf";

const FirstReactThreeFiber = () => {
  // Orthographic camera will render the scene regardless of the perspective, meaning that the size of the objects will look the same irrespective of how far away the object is from the camera

  const creatingCanvasHandler = (state) => {
    console.log(state, "calls at the begining only once");
  };

  return (
    <Canvas
    // gl={{
    //   antialias: true,
    //   alpha: true,
    // }}
    // orthographic
    // camera={{
    //   fov: 45,
    //   near: 0.1,
    //   far: 100,
    //   // zoom: 80,
    //   position: [2, 2, 6],
    // }}
    // onCreated={creatingCanvasHandler}
    >
      {/* <Scene /> */}
      {/* <Scene2 /> */}
      {/* <Scene3 /> */}
      {/* <ParticlesScene /> */}
      <ModelAnimation />
      {/* <Perf position="top-left" /> */}
    </Canvas>
  );
};

export default FirstReactThreeFiber;
