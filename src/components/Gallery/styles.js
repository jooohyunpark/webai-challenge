import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  padding: 20px;
  /* overflow-x: auto; */
`;

export const CarouselView = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 10px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

export const GridView = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const GalleryItem = styled(motion.div)`
  width: 120px;
  flex-shrink: 0;
`;
