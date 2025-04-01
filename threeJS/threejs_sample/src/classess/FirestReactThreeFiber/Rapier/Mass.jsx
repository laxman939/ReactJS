/* eslint-disable react/no-unknown-property */
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import CarModel from "./CarModel";

const Mass = () => {
  const cubeRef = useRef();
  const cubeRefSec = useRef();

  const cubeClickHandler = () => {
    if (cubeRef.current) {
      //   cubeRef.current.applyImpulse({ x: 0.0, y: 2, z: 0 }); // single push
      cubeRef.current.applyImpulse({ x: -80, y: -Math.PI / 2, z: 0 }); // single push
    }
  };
  const cubeClickHandlerSec = () => {
    if (cubeRefSec.current) {
      cubeRefSec.current.applyImpulse({ x: 80, y: 0, z: 0 });
      //   cubeRefSec.current.applyImpulse({
      //     x: 0,
      //     y: 10,
      //     z: 0,
      //   });
    }
  };

  return (
    <>
      <Physics>
        <RigidBody ref={cubeRef} name="Red Box" mass={50}>
          <mesh>
            {/* For sphereGeometry colliders="ball" is mandatory */}
            {/* <sphereGeometry args={[0.5, 64, 64]} /> */}
            {/* <boxGeometry />
            <meshStandardMaterial color="#CC3941" /> */}
            <CarModel
              castShadow
              position={[5.5, 0, 0]}
              //   position-x={-2}
              onClick={cubeClickHandler}
              rotation-y={-Math.PI / 2}
              //   rotation-x={Math.PI / 2}
              //   scale-z={2}
            />
          </mesh>
        </RigidBody>

        <RigidBody name="Bally McBallFace" ref={cubeRefSec}>
          {" "}
          mass={130}
          <mesh
            castShadow
            position={[1, 1.5, 0]}
            onClick={cubeClickHandlerSec}
            scale={2}
          >
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" name="Floor" restitution={0.1} friction={0}>
          <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default Mass;
