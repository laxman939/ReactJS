/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import ParticlesScene from "./ParticlesScene";
import ModelAnimation from "./ModelAnimation";
import { Perf } from "r3f-perf";
import Environment_Staging from "./Drei/Environment_Staging";
import Camera from "./Drei/Camera";
import Controls from "./Drei/Controls";

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
      // shadows // To activate shadows
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 100,
      //   // zoom: 80,
      //   position: [0, 2, 7],
      // }}
      // onCreated={creatingCanvasHandler}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* <Scene /> */}
      {/* <Scene2 /> */}
      {/* <Scene3 /> */}
      {/* <ParticlesScene /> */}
      {/* <ModelAnimation /> */}
      {/* <Environment_Staging /> */}
      {/* <Camera /> */}
      <Controls />

      {/* <Perf position="top-left" /> */}
    </Canvas>
  );
};

export default FirstReactThreeFiber;
