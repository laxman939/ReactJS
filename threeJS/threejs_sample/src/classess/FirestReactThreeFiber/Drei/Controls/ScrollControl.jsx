/* eslint-disable react/no-unknown-property */
import { Scroll, ScrollControls, useGLTF } from "@react-three/drei";
import Images from "./Images";
import { OrbitControls } from "@react-three/drei";

const ScrollControl = () => {
  const model = useGLTF("./model/duck_model.gltf");

  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight />

      <ScrollControls
        pages={3}
        damping={0.4}
        // infinite={true}
        // horizontal
      >
        <Scroll>
          <Images />
        </Scroll>

        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
            to
          </h1>
          <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "198.5vh",
              left: "0.5vw",
              fontSize: "40vw",
            }}
          >
            home
          </h1>
        </Scroll>
        {/* <Scroll>
          <mesh position={[0.5, -2, 0.8]}>
            <boxGeometry />
            <meshBasicMaterial color="#FF0077" />
          </mesh>
        </Scroll> */}
        {/* <mesh position={[0.6, 0.3, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh> */}

        <mesh
          position={[-1.8, -0.45, 0]}
          //   rotation-y={-Math.PI / 3}
          scale={1.2}
          // rotation-y={Math.PI / 8}
          // rotation-z={Math.PI / 2}
        >
          <primitive object={model.scene} />
        </mesh>
        {/* <OrbitControls
          makeDefault
          target={[-1.8, -0.45, 0]}
          enablePan={true}
          enableRotate={true}
          enableZoom={true}
          minDistance={2}
          maxDistance={10}
        /> */}
      </ScrollControls>
    </>
  );
};

export default ScrollControl;
