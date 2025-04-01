/* eslint-disable react/no-unknown-property */
import { Physics, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

const RigidBodyMethods = () => {
  const [isAsleep, setIsAsleep] = useState(false);
  const cubeRef = useRef();
  const cubeRefSec = useRef();

  const cubeClickHandler = () => {
    if (cubeRef.current) {
      cubeRef.current.applyImpulse({ x: 0.0, y: 2, z: 0 }, true); // single push
      //   cubeRef.current.addForce({ x: 0.0, y: 2, z: 0 }, true); // contineous force
      //   cubeRef.current.applyTorqueImpulse({ x: 0, y: 5, z: 0 });
    }
  };
  const cubeClickHandlerSec = () => {
    if (cubeRefSec.current) {
      //   cubeRefSec.current.applyImpulse({ x: 0, y: 10, z: 0 });
      cubeRefSec.current.applyImpulse({
        x: isAsleep ? 3 : 0,
        y: isAsleep ? 0 : 2,
        z: 0,
      });
    }
  };

  return (
    <>
      <Physics>
        <RigidBody
          ref={cubeRef}
          onCollisionEnter={() => console.log("Enter collision")}
          onCollisionExit={() => console.log("Exit collision")}
          onSleep={() => console.log("sleeping")}
          onWake={() => console.log("Awake")}
          gravityScale={1}
          //   gravityScale={0.25}
          restitution={0.25}
          friction={0.1}
          colliders="ball"
          name="Red Ball"
        >
          <mesh castShadow position={[-2.5, 2, 0]} onClick={cubeClickHandler}>
            {/* <boxGeometry /> */}
            {/* For sphereGeometry colliders="ball" is mandatory */}
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </RigidBody>

        <RigidBody
          colliders="hull"
          onSleep={() => setIsAsleep(true)}
          onWake={() => setIsAsleep(false)}
          name="Bally McBallFace"
          onCollisionEnter={({ manifold, target, other }) => {
            console.log(
              "Collision at world position ",
              manifold.solverContactPoint(0)
            );
            console.log(other, "other", target, manifold);

            if (other.rigidBodyObject) {
              console.log(
                // this rigid body's Object3D
                target.rigidBodyObject.name,
                " collided with ",
                // the other rigid body's Object3D
                other.rigidBodyObject.name
              );
            }
          }}
          ref={cubeRefSec}
        >
          <mesh
            castShadow
            position={[-1.5, 2.5, 0]}
            onClick={cubeClickHandlerSec}
          >
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" restitution={1} name="Floor">
          <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default RigidBodyMethods;
