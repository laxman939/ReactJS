/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import HelloPhysics from "./HelloPhysics";
import Colliders from "./Colliders";
import RigidBodyMethods from "./RigidBodyMethods";

const PhysicsScene = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      {/* <HelloPhysics /> */}
      {/* <Colliders /> */}
      <RigidBodyMethods />
    </>
  );
};

export default PhysicsScene;
