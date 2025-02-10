/* eslint-disable react/no-unknown-property */
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  //   const model = useLoader(GLTFLoader, "./model/dog.glb");
  // (or) With drei
  const model = useGLTF("./model/dog.glb");

  console.log(model, "model");

  return (
    <>
      <primitive scale={1} position-y={-0.4} object={model.scene} />
    </>
  );
};
useGLTF.preload("./model/dog.glb");
export default Model;

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bike/model.gltf"
);
