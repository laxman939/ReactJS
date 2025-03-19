/* eslint-disable react/no-unknown-property */
import { a, useSpring } from "@react-spring/three";
import { useState } from "react";

const Props = () => {
  const [clicked, setClicked] = useState(false);

  let n = 0;
  const { x, y, color } = useSpring({
    // from: { color: "hotpink", y: -3, x: -3 },
    // to: [
    //   { color: "greenyellow", x: 3, y: -3 },
    //   { color: "yellow", x: 3, y: 3 },
    //   { color: "cyan", x: -3, y: 3 },
    //   { color: "hotpink", x: -3, y: -3 },
    // ],

    // reverse will work for these
    from: { color: "hotpink", y: 0 },
    to: { color: "greenyellow", y: -4 },
    // reverse: clicked,

    // loop: () => 3 > n++, // Should return a boolean value
    // loop: true,
    // delay: 1000,
    config: {
      mass: 80,
      tension: 500,
      clamp: false,
      friction: 50,
      bounce: 1.5,
    },
    // config: { mass: 20, tension: 700, duration: 5000 },
    // pause: clicked, // need for below methods
    reset: clicked,
    onStart: () => console.log("onStart"),
    onReset: () => console.log("onReset"),
    onPause: () => console.log("onPause"),
    onResume: () => console.log("onResume"),
    onChange: () => console.log("change", y.animation.values[0]),
  });

  return (
    <>
      <a.mesh
        // position-x={x}
        position-y={y}
        onClick={() => setClicked(!clicked)}
      >
        {/* <boxGeometry /> */}
        <sphereGeometry args={[0.8, 64, 64]} />
        {/* <planeGeometry args={[4, 0.5]} /> */}
        <a.meshBasicMaterial color={color} />
      </a.mesh>
      <mesh position-y={-5}>
        <planeGeometry args={[4, 0.5]} />
        <a.meshBasicMaterial color={color} />
      </mesh>
    </>
  );
};

export default Props;
