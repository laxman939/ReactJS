/* eslint-disable react/no-unknown-property */
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import HelloPhysics from "./HelloPhysics";
import Colliders from "./Colliders";
import RigidBodyMethods from "./RigidBodyMethods";
import Mass from "./Mass";
import TypesGame from "./TypesGame";
import InstancedMesh from "./InstancedMesh";
import SensorGame from "./SensorGame";

const PhysicsScene = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      {/* <HelloPhysics /> */}
      {/* <Colliders /> */}
      {/* <RigidBodyMethods /> */}
      {/* <Mass /> */}
      {/* <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <TypesGame />
      </KeyboardControls> */}
      {/* <InstancedMesh /> */}
      <SensorGame />
    </>
  );
};

export default PhysicsScene;
