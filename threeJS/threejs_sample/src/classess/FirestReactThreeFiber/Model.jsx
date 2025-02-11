/* eslint-disable react/no-unknown-property */
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const DogModel = () => {
  //   const model = useLoader(GLTFLoader, "./model/dog.glb");
  // (or) With drei
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  console.log(model, "model", animations);

  useEffect(() => {
    // animations.actions.Embarrassed.play();
    // animations.actions.ClickedOn.play();
    // animations.actions.Idle.play();
    // animations.actions.Show.play();
    // animations.actions.Travel.play();
    animations.actions.Writing.play();
    // animations.actions.Congratulate.play();
  }, []);

  return (
    <>
      <primitive scale={1.6} position-y={-0.9} object={model.scene} />
    </>
  );
};
useGLTF.preload("./model/dog.glb");
export default DogModel;

// useGLTF.preload(
//   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bike/model.gltf"
// );
