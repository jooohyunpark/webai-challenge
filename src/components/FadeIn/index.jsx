import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, duration = 0.4 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
