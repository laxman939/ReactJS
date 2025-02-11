/* eslint-disable react/no-unknown-property */
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Model = () => {
  //   const model = useLoader(GLTFLoader, "./model/dog.glb");
  // (or) With drei
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  console.log(model, "model", animations);

  useEffect(() => {
    animations.actions.Pleased.play();
  }, []);

  return (
    <>
      <primitive scale={1} position-y={-0.4} object={model.scene} />
    </>
  );
};
useGLTF.preload("./model/dog.glb");
export default Model;

// useGLTF.preload(
//   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bike/model.gltf"
// );
