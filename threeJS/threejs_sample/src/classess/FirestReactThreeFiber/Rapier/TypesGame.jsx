/* eslint-disable react/no-unknown-property */
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";

const TypesGame = () => {
  const cubeRef = useRef();
  const spinnerRef = useRef();
  const isJump = useRef(false);

  const initialPosition = [2.5, 2.5, 0];

  const allKeys = useKeyboardControls((keys) => keys);
  //   console.log(allKeys, "allKeys");

  const cubeClickHandler = () => {
    if (cubeRef.current) {
      //   cubeRef.current.applyImpulse({ x: 0.0, y: 2, z: 0 }); // single push
      cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 }); // single push
    }
  };

  const cubeMovementHandler = () => {
    if (allKeys.forward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: -0.3 });
    }
    if (allKeys.backward) {
      cubeRef.current.applyImpulse({ x: 0, y: 0, z: 0.3 });
    }
    if (allKeys.leftward) {
      cubeRef.current.applyImpulse({ x: -0.3, y: 0, z: 0.3 });
    }
    if (allKeys.rightward) {
      cubeRef.current.applyImpulse({ x: 0.3, y: 0, z: 0.3 });
    }

    if (isJump.current) {
      if (allKeys.jump) {
        cubeRef.current.applyImpulse({ x: 0.3, y: 40, z: 0 });
        isJump.current = false;
      }
    }
  };

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    // 1. setNextKinematicTranslation({}) -- Moving
    spinnerRef.current.setNextKinematicTranslation({
      x: 0,
      y: Math.abs(Math.sin(elapsedTime)), // sin to get values -1 to 1 and abs to get only +ve values
      z: 0,
    });

    // 2. setNextKinematicRotation({}) -- Rotating
    const eulerRotationAngle = new THREE.Euler(0, elapsedTime, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotationAngle);

    spinnerRef.current.setNextKinematicRotation(quaternionRotation);

    // Cube movement
    cubeMovementHandler();

    // Fall down
    if (cubeRef.current) {
      const position = cubeRef.current.translation();

      // Object is "fallen" if it's near the ground and not moving much
      if (position.y < -5) {
        console.log("The cube has fallen and is at rest");
        cubeRef.current.setTranslation({
          x: initialPosition[0],
          y: initialPosition[1],
          z: initialPosition[2],
        });
        // Reset velocity
        cubeRef.current.setLinvel({ x: 0, y: 0, z: 0 });
        // Reset angular velocity
        cubeRef.current.setAngvel({ x: 0, y: 0, z: 0 });
        // Reset rotation
        cubeRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 });
      }
    }
  });

  return (
    <>
      <Physics>
        <Debug />
        <RigidBody
          ref={cubeRef}
          name="Red Box"
          position={[2.5, 2.5, 0]}
          // position={[0.3, 2.5, 0]}
          onCollisionEnter={() => (isJump.current = true)}
          onCollisionExit={() => (isJump.current = false)}
        >
          <mesh castShadow onClick={cubeClickHandler}>
            <boxGeometry args={[1.75, 1.75, 1.75]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody
          name="Bally McBallFace"
          position-y={-0.65}
          type="kinematicPosition"
          //   type="kinematicVelocity"
          ref={spinnerRef}
        >
          <mesh receiveShadow>
            <boxGeometry args={[1, 0.35, 15]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          name="Floor"
          restitution={0.5}
          friction={0}
          rotation-x={-Math.PI * 0.5}
          position-y={-1}
        >
          <mesh receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default TypesGame;
