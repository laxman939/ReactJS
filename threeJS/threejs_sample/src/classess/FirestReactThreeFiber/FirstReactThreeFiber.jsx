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
import Html_3dText from "./Drei/html_3DText/Html_3dText";
import Shaders from "./Drei/shaders/Shaders";
import MeshPortalMaterials from "./Drei/MeshPortalMaterials";
import ImperativeAPI from "./Spring/ImperativeAPI";
import Props from "./Spring/Props";
import SpringRefProp from "./Spring/SpringRefProp";
import { useState } from "react";
import UseSpringsProp from "./Spring/UseSpringsProp";

const FirstReactThreeFiber = () => {
  // Orthographic camera will render the scene regardless of the perspective, meaning that the size of the objects will look the same irrespective of how far away the object is from the camera

  const creatingCanvasHandler = (state) => {
    console.log(state, "calls at the begining only once");
  };

  return (
    <Canvas
      // onPointerMove={(e) => {
      //   setCursorPosition({
      //     x: e.clientX,
      //     y: e.clientY,
      //   });
      // }}
      // gl={{
      //   antialias: true,
      //   alpha: true,
      // }}
      // orthographic
      // shadows // To activate shadows
      camera={{
        fov: 35,
        near: 0.1,
        far: 100,
        // zoom: 80,
        position: [0, 0, 20],
      }} // Require for props
      // onCreated={creatingCanvasHandler}
      // camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* <Scene /> */}
      {/* <Scene2 /> */}
      {/* <Scene3 /> */}
      {/* <ParticlesScene /> */}
      {/* <ModelAnimation /> */}
      {/* <Environment_Staging /> */}
      {/* <Camera /> */}
      {/* <Controls /> */}
      {/* <Html_3dText /> */}
      {/* <Shaders /> */}
      {/* <MeshPortalMaterials /> */}

      {/* React Spring */}
      {/* <ImperativeAPI /> */}
      {/* <Props /> */}
      {/* <SpringRefProp /> */}
      {<UseSpringsProp />}

      {/* <Perf position="top-left" /> */}
    </Canvas>
  );
};

export default FirstReactThreeFiber;
