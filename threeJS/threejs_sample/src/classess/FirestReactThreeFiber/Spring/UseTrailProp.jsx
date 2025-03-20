import { a, useTrail } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import React from "react";

const UseTrailProp = () => {
  //   If we take function as 2nd argument it will return array of two elements(trail & API)
  const [trail, api] = useTrail(3, () => ({
    from: { scale: 0 },
  }));

  let active = true;

  // On outside click
  const missedPointer = () => {
    if (active) {
      active = false;

      api.start({
        to: { scale: 0.6 },
      });
    } else {
      active = true;
      api.start({
        to: { scale: 0.0 },
      });
    }
  };

  return (
    <>
      <OrbitControls />

      {trail.map((item, i) => (
        <a.mesh
          key={Math.random()}
          scale={item.scale}
          position={-i + 1}
          //   position-x={-i + 1}
          name={i}
          onPointerMissed={missedPointer}
        >
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </a.mesh>
      ))}
    </>
  );
};

export default UseTrailProp;
