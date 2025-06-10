import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const GalleryContainer = styled(motion.div)`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 40px 0;
`;

export const CarouselView = styled(motion.div)`
  display: flex;
  gap: 15px;
`;

export const GridView = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: grid;
  gap: 10px;
  width: 100%;
`;

export const CarouselItem = styled(motion.div)`
  width: 80px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const GridItem = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: grid;
  place-content: center;
`;
