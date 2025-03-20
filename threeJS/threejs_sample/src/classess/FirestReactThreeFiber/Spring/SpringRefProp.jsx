import { a, useSpring, useSpringRef } from "@react-spring/three";

const SpringRefProp = () => {
  // Case - 1: using useSpring
  //   const [spring, api] = useSpring(() => ({
  //     from: { x: -3, y: 0 },
  //   }));

  //   const clickHandler = () => {
  //     console.log(spring.y.get(), "x");
  //     api.start({
  //       to: { x: spring.x.get() === 3 ? -3 : 3 },
  //     });
  //   };

  //   Case - 2 : Using useSpringRef
  const springRef = useSpringRef();

  const spring = useSpring({
    ref: springRef,
    from: { x: -3 },
  });

  const clickHandler = () => {
    springRef.start({
      to: { x: spring.x.get() === 3 ? -3 : 3 },
    });
  };

  const onPointerOverHandler = () => {
    springRef.pause();
  };

  const onPointerOutHandler = () => {
    springRef.resume();
  };

  return (
    <>
      <a.mesh
        position-x={spring.x}
        onClick={clickHandler}
        onPointerOver={onPointerOverHandler}
        onPointerOut={onPointerOutHandler}
      >
        <boxGeometry />
        <a.meshBasicMaterial color="hotpink" />
      </a.mesh>
    </>
  );
};

export default SpringRefProp;
