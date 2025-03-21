/* eslint-disable react/no-unknown-property */

import { Physics, RigidBody } from "@react-three/rapier";

// https://github.com/pmndrs/react-three-rapier

const HelloPhysics = () => {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <RigidBody>
        <mesh castShadow position={[0, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh
          castShadow
          position={[0, 1.5, 0]}
          scale={[0.25, 3, 1]}
          position-z={-2}
        >
          <boxGeometry />
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default HelloPhysics;
