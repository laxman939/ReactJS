import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  //   const exampleVariant = {
  //     visible: { opacity: 1 },
  //     hidden: { opacity: 0 },
  //   };

  const boxVariant = {
    visible: { opacity: 1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      //   variants={exampleVariant}

      //   animate={{ x: 100 }}
      //   initial={{ x: 0 }}

      //   variants={boxVariant}
      //   initial="hidden"
      //   animate="visible"

      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="box"
    >
      <h1>Box{num}</h1>
    </motion.div>
  );
};

export default Box;
