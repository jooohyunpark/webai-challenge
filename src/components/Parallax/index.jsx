import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ children, velocity = 10, scaleVelocity = 1 }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-velocity, velocity]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [1 - scaleVelocity, 1, 1, 1 - scaleVelocity]
  );

  return (
    <motion.div className="parallax" ref={ref} style={{ y, scale }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
