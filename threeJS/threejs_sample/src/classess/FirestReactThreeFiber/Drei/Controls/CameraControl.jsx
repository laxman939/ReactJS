import { Grid, CameraControls } from "@react-three/drei";
import { useRef } from "react";
import { button, buttonGroup, useControls } from "leva";
import * as THREE from "three";

const CameraControl = () => {
  const cameraControlRef = useRef();
  const { DEG2RAD } = THREE.MathUtils;
  console.log(DEG2RAD, "DEG2RAD");

  const cameraControls = useControls("Camera Controls", {
    horizontalRotation: buttonGroup({
      label: "Horizontal Rotation",
      opts: {
        "45deg": () => cameraControlRef.current.rotate(DEG2RAD * 45, 0, true),
        "-90deg": () => cameraControlRef.current.rotate(DEG2RAD * -90, 0, true),
        "360deg": () => cameraControlRef.current.rotate(DEG2RAD * 360, 0, true),
      },
    }),
    verticalRotation: buttonGroup({
      label: "Vertical Rotation",
      opts: {
        "20deg": () => cameraControlRef.current.rotate(0, DEG2RAD * 20, true),
        "-40deg": () => cameraControlRef.current.rotate(0, DEG2RAD * -40, true),
      },
    }),
    truckGroup: buttonGroup({
      label: "Truck Rotation",
      opts: {
        "(1,0)": () => cameraControlRef.current.truck(1, 0, true),
        "(0,1)": () => cameraControlRef.current.truck(0, 1, true),
        "(-1,-1)": () => cameraControlRef.current.truck(-1, -1, true),
      },
    }),
    zoomGroup: buttonGroup({
      label: "Zoom",
      opts: {
        0.25: () => cameraControlRef.current.zoom(0.25, true),
        "-0.25": () => cameraControlRef.current.zoom(-0.25, true),
      },
    }),
    lookAtBox: button(
      () => cameraControlRef.current.setLookAt(0, 1, 3, 0, 0, 0, true),
      {
        label: "Look at box",
      }
    ),
  });

  return (
    <>
      <CameraControls ref={cameraControlRef} smoothTime={0.25} />
      <Grid
        args={[30, 30]}
        cellSize={0.25}
        cellColor="#6f6f6f"
        sectionSize={1.5}
        sectionColor="#6364A6"
        fadeDistance={20}
        fadeStrength={0.75}
      />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#B900F7" />
      </mesh>
    </>
  );
};

export default CameraControl;
