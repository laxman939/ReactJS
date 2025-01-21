import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <mesh position-x={-2} rotation-x={Math.PI * 0.5}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[2, 0, 0]} scale={1.5}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
