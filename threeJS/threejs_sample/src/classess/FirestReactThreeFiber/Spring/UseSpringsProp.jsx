/* eslint-disable react/no-unknown-property */
import { a, useSprings } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

let items = [
  {
    initialPosition: [-3.5, 0, 0],
    finalPosition: [-1.5, 0, 0],
  },
  {
    initialPosition: [0, 3.5, 0],
    finalPosition: [0, 0, 0],
  },
  {
    initialPosition: [3.5, 0, 0],
    finalPosition: [1.5, 0, 0],
  },
];

const UseSpringsProp = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  const boxRef = useRef();
  const boxRefs = useRef([]); // An array to hold refs for each box

  const springs = useSprings(
    items.length,
    items.map((item) => ({
      from: { position: item.initialPosition },
      to: { position: item.finalPosition },
      //   loop: true,
      //   reverse: true,
      reset: clicked,
    }))
  );

  useFrame((_, delta) => {
    // if (boxRef && boxRef.current) {
    //   boxRef.current.rotation.y += delta * 3;
    // }

    // For each element
    boxRefs.current.forEach((boxRef) => {
      //   console.log(boxRef, "boxRef", boxRef.name);

      if (boxRef) {
        boxRef.rotation.y += delta * boxRef.name + 0.01;
      }
    });
  });

  console.log(springs, "springs");

  return (
    <>
      <OrbitControls />

      {springs.map((item, i) => (
        <a.mesh
          ref={(el) => (boxRefs.current[i] = el)} // Assign ref to each element
          //   ref={selectedBox === i ? boxRef : null}
          key={Math.random()}
          scale={0.8}
          position={item.position}
          onDoubleClick={() => {
            console.log(springs[i], i);
            console.log(springs[i].position.get(), i);
            setSelectedBox(null);
            setClicked(!clicked);
          }}
          name={i}
          onClick={() => setSelectedBox(i)}
          //   rotation={selectedBox === i ? [1, 2, 1] : [0, 0, 0]}
          //   rotation={selectedBox === i}
        >
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </a.mesh>
      ))}
    </>
  );
};

export default UseSpringsProp;
