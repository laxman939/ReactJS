import { PositionalAudio } from "@react-three/drei";

const PositionAudio = ({ play }) => {
  console.log("play", play);

  return (
    <>
      {play && (
        <PositionalAudio
          url="./sound/dog_sound_3.wav"
          autoplay
          loop
          distance={5}
        />
      )}
    </>
  );
};

export default PositionAudio;
