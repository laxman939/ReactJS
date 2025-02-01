/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";

const ParticlesScene = () => {
  return (
    <>
      <OrbitControls />

      {/* Particles Component */}
      <Particles />
    </>
  );
};

export default ParticlesScene;
