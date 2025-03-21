/* eslint-disable react/no-unknown-property */
import {
  CapsuleCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";

// https://github.com/pmndrs/react-three-rapier
// https://rapier.rs/docs/user_guides/javascript/colliders

// colliders - default value is cuboid
//  trimesh - use very limitedly(Reduces the performance)

const Colliders = () => {
  return (
    <>
      <Physics gravity={[0, -9.81, 0]} debug>
        <RigidBody colliders={false} position={[1.5, 1.5, 0]}>
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
          {/* <CuboidCollider args={[1.5, 1.5, 1.5]} /> */}
          {/* <CuboidCollider args={[0.25, 0.25, 0.25]} position={[-2, -1, -2.5]} /> */}
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>
        {/* <RigidBody colliders={false}>
          <CuboidCollider args={[0.5, 0.5, 0.5]} position={[1.5, 1.5, 0]} />
          <mesh castShadow position={[1.5, 1.5, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody> */}
        <RigidBody colliders="hull">
          <mesh castShadow position={[-1.5, 1.5, 0]}>
            <torusKnotGeometry args={[0.5, 0.15, 100, 100]} />
            <meshStandardMaterial color="#C519G1" />
          </mesh>
        </RigidBody>

        <RigidBody colliders={false} position={[0, 1.5, -1.5]}>
          <CapsuleCollider args={[0.375, 0.6]} />
          <mesh>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default Colliders;
