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
          position: [3, 3, 7],
        }}
      >
        <PhysicsScene />
      </Canvas>
    </>
  );
};

export default MainPhysics;
