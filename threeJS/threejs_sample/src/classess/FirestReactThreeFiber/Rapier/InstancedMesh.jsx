/* eslint-disable react/no-unknown-property */
import { InstancedRigidBodies, Physics, RigidBody } from "@react-three/rapier";
import { useMemo } from "react";

const InstancedMesh = () => {
  const count = 300;

  const cubeTransformations = useMemo(() => {
    const cubePositions = [];
    const cubeRotations = [];
    const cubeScales = [];
    // (Math.random() - 0.5) --> -0.5 to cover both right and left sides of the floor
    for (let i = 0; i < count; i++) {
      cubePositions.push([
        (Math.random() - 0.5) * 5,
        Math.random() * 20,
        (Math.random() - 0.5) * 5,
      ]);
      cubeRotations.push([0, 0, 0]);
      cubeScales.push([0.5, 0.5, 0.5]);
    }

    return {
      positions: cubePositions,
      rotations: cubeRotations,
      scales: cubeScales,
    };
  }, []);

  return (
    <>
      <Physics>
        {/* <RigidBody>
          <mesh castShadow position={[0, 1.5, 0]} geometry={new THREE.BoxGeometry(2,2,2)}>
          {/* OR 
          <mesh castShadow position={[0, 1.5, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody> */}
        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
        <InstancedRigidBodies
          positions={cubeTransformations.positions}
          rotations={cubeTransformations.rotations}
          scales={cubeTransformations.scales}
        >
          <instancedMesh args={[null, null, count]} castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </instancedMesh>
        </InstancedRigidBodies>
      </Physics>
    </>
  );
};

export default InstancedMesh;
