/* eslint-disable react/no-unknown-property */
import {
  CameraControls,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const MeshPortalMaterials = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);

  const meshPortalMaterialRef = useRef();
  const meshPortalMaterialRefTwo = useRef();
  const cameraControlRef = useRef();

  const model = useGLTF("./model/egg_model.glb");
  const textureTwo = useTexture("./images/img2.jpeg");
  const texture = useTexture("./texture/1.png");

  useFrame((_, delta) => {
    easing.damp(
      meshPortalMaterialRef.current,
      "blend",
      isActive ? 1 : 0,
      0.2,
      delta
    );
  });

  const doubleClickHandler = () => {
    setIsActive(!isActive);
    setIsActiveTwo(false);
  };

  const doubleClickHandlerTwo = () => {
    // setIsActive(fa);
    setIsActiveTwo(!isActiveTwo);
  };

  useEffect(() => {
    if (isActive) {
      cameraControlRef.current.setLookAt(0, 0, 3, 0, 0, 0, true);
    } else {
      cameraControlRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [isActive]);

  return (
    <>
      {/* <OrbitControls /> */}
      <CameraControls ref={cameraControlRef} />

      <Text
        position={[0, 1.6, 0.1]}
        fontSize={0.6}
        color="white"
        fontWeight={600}
      >
        Eggs
        <meshBasicMaterial toneMapped={false} />
      </Text>
      {/* We can add materal next to text and this material changes will effects the text also */}

      <RoundedBox
        args={[3, 4, 0.1]}
        radius={0.1}
        onDoubleClick={doubleClickHandler}
      >
        {/* <planeGeometry args={[2, 3]} /> */}
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <primitive object={model.scene} scale={0.6} position-y={0.6} />

          <mesh>
            <sphereGeometry args={[3, 64, 64]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
        {/* <group position={[0, 0, 0]}> */}

        {/* <MeshPortalMaterial ref={meshPortalMaterialRefTwo}>
            <mesh>
              <sphereGeometry args={[3, 64, 64]} />
              <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
          </MeshPortalMaterial> */}
        {/* </group> */}
      </RoundedBox>
    </>
  );
};

export default MeshPortalMaterials;
