/* eslint-disable react/no-unknown-property */
import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

const SensorGame = () => {
  const [isTouched, setIsTouched] = useState(false);
  //   const [isLoaded, setIsLoaded] = useState(false);
  const sphereRef = useRef();

  const initialPosition = [0, 2.5, 5];

  const sphereHandler = () => {
    sphereRef.current.applyImpulse({ x: 0, y: 2.25, z: -2.25 });
    // setIsLoaded(false);
  };

  useFrame((state) => {
    if (sphereRef.current) {
      const position = sphereRef.current.translation();

      // Object is "fallen" if it's near the ground and not moving much
      if (position.y < -5) {
        // setIsLoaded(true);
        console.log("The cube has fallen and is at rest");
        sphereRef.current.setTranslation({
          x: 0,
          y: 2.5,
          z: 5,
        });
      }
    }
  });

  return (
    <>
      <Physics>
        <Debug />
        <RigidBody
          ref={sphereRef}
          position={[0, 2.5, 5]}
          colliders="hull"
          restitution={0}
          friction={3}
          mass={1}
          //   onCollisionEnter={() => setIsLoaded(false)}
          //   onCollisionExit={() => console.log("Exit collision")}
        >
          <mesh castShadow onClick={sphereHandler}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" position={[0, 0.175, -5]}>
          <CuboidCollider
            args={[1, 1, 1]}
            sensor
            onIntersectionEnter={() => setIsTouched(true)}
            onIntersectionExit={() => {
              setIsTouched(false);
            }}
          />
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
      {isTouched && (
        <Text3D
          position={[-1.75, 3, -5]}
          font="./fonts/Montserrat SemiBold_Regular.json" /// https://gero3.github.io/facetype.js/ -- To convert into json format
        >
          Goal
          <meshNormalMaterial />
        </Text3D>
      )}
    </>
  );
};

export default SensorGame;
