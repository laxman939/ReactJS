import { Center, Float, Text, Text3D } from "@react-three/drei";

const Text_3Dtext = () => {
  return (
    <>
      <Text
        fontSize={0.4}
        font="./fonts/Montserrat-SemiBold.ttf"
        color="orange"
        maxWidth={2}
        position-y={1.5}
        rotation-y={Math.PI * 0.1}
        textAlign="center"
      >
        Hello Three JS
      </Text>

      <Center>
        <Float speed={3} floatIntensity={4}>
          <Text3D
            font="./fonts/Montserrat SemiBold_Regular.json" /// https://gero3.github.io/facetype.js/ -- To convert into json format
            height={1}
            size={0.8}
            letterSpacing={-0.1}
            bevelEnabled
            bevelSegments={10}
          >
            Ram Laxman
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </>
  );
};

export default Text_3Dtext;
