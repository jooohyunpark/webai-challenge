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
        amount: 0.75,
        once: false,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
