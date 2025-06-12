import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled(motion.h1)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 0.2em;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  text-wrap: balance;
  mix-blend-mode: difference;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const BoxWrapper = styled(motion.div)`
  position: relative;
  width: 0.8em;
  height: 0.8em;
  margin-right: 0.2em;
  z-index: 1;
`;

export const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const H1Span = styled(motion.span)`
  display: inline-block;
`;

export const ImageWrapper = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled(motion.img)`
  display: block;
  width: 180px;
`;
