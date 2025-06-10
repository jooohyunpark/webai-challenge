import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  text-wrap: balance;
  mix-blend-mode: difference;
`;

export const GalleryLayout = styled.div`
  /* position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0; */
`;

export const TextContent = styled(motion.div)`
  transition: all 0.3s ease-in-out;
`;
