import PhysicsScene from "./PhysicsScene";
import { Canvas } from "@react-three/fiber";

const MainPhysics = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 7, 20],
        }}
      >
        <PhysicsScene />
      </Canvas>
    </>
  );
};

export default MainPhysics;
