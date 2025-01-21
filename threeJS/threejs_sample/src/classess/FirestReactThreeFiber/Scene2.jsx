/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import Custom from "./Custom";

const Scene2 = () => {
  return (
    <>
      <OrbitControls />
      <axesHelper args={[3]} />
      <gridHelper args={[20, 20, 0xff0000, "cyan"]} />
      {/* <mesh position-z={3}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh> */}
      <Custom />
      <mesh position-y={-0.5}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  );
};

export default Scene2;
