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
    from: { color: "hotpink", x: -3 },
    to: { color: "greenyellow", x: 3 },
    // reverse: clicked,

    // loop: () => 3 > n++, // Should return a boolean value
    // loop: true,
    // delay: 1000,
    config: { mass: 20, tension: 700, clamp: false, friction: 50 },
    // config: { mass: 20, tension: 700, duration: 5000 },
    // pause: clicked, // need for below methods
    reset: clicked,
    onStart: () => console.log("onStart"),
    onReset: () => console.log("onReset"),
    onPause: () => console.log("onPause"),
    onResume: () => console.log("onResume"),
  });

  return (
    <>
      <a.mesh
        position-x={x}
        position-y={y}
        onClick={() => setClicked(!clicked)}
      >
        {/* <boxGeometry /> */}
        <sphereGeometry args={[1, 64, 64]} />
        {/* <planeGeometry args={[4, 0.5]} /> */}
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export default Props;
