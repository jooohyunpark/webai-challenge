import { Container, Row, Col } from "react-grid-system";
import ScrollLayout from "@/components/ScrollLayout";
import { useState, useRef, useMemo } from "react";
import { useScroll, useTransform, easeInOut } from "motion/react";
import Card from "@/components/Card";
import { ThreeScene } from "@/components/ThreeScene";
import {
  StyledSection,
  H1,
  Box,
  H1Span,
  BoxWrapper,
  Image,
  ImageWrapper,
} from "./styles";

const text = `Discover, remix, and master AI visual creation using our prompt library built for designers`;
const imageCount = 12;

const images = Array.from({ length: imageCount }).map((_, i) => ({
  src: `/${i + 1}.png`,
}));

const Hero = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");
  const wordCount = words.length;

  const h1X = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.95],
    ["50%", "0%", "0%", "50%"]
  );
  const h1XmMargin = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.95],
    ["-0.8em", "0em", "0em", "-0.8em"]
  );

  const boxScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.95],
    [5, 1, 1, 5]
  );
  const boxRotation = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.95],
    ["0deg", "-180deg", "-180deg", "90deg"],
    {
      ease: easeInOut,
    }
  );

  // Create arrays of opacity and y transforms for each word
  const wordAnimations = words.map((_, index) => {
    const introStart = 0.12 + (index * 0.15) / wordCount;
    const introEnd = introStart + 0.1;

    const outroStart = 0.83;
    const outroEnd = 0.86;

    return {
      opacity: useTransform(
        scrollYProgress,
        [introStart, introEnd, outroStart, outroEnd],
        [0, 1, 1, 0]
      ),
      y: useTransform(scrollYProgress, [introStart, introEnd], [10, 0], {
        ease: easeInOut,
      }),
      blur: useTransform(
        scrollYProgress,
        [introStart, introEnd, outroStart, outroEnd],
        ["blur(5px)", "blur(0px)", "blur(0px)", "blur(5px)"]
      ),
    };
  });

  // Generate random positions and animations for images
  const imageAnimations = Array.from({ length: imageCount }).map((_, index) => {
    const positions = [
      { x: -30, y: -30, scale: 0.7 },
      { x: 0, y: 30, scale: 1.0 },
      { x: 30, y: 30, scale: 0.7 },

      { x: -30, y: 0, scale: 0.8 },
      { x: 30, y: 0, scale: 0.6 },
      { x: -30, y: 30, scale: 0.9 },
      { x: 0, y: -30, scale: 1.1 },
      { x: -15, y: -15, scale: 1.1 },
      { x: 30, y: -30, scale: 0.9 },

      { x: 15, y: -15, scale: 0.8 },
      { x: 0, y: 15, scale: 0.9 },
      { x: 0, y: 0, scale: 1.2 },
    ];

    const pos = positions[index];

    const fadeStart = 0.3 + (index * 0.2) / imageCount;
    const fadeEnd = fadeStart + 0.05;

    const animateStart = 0.4 + (index * 0.2) / imageCount;
    const animateEnd = animateStart + 0.1;

    const scaleStart = 0.5 + (index * 0.1) / imageCount;
    const scaleEnd = scaleStart + 0.05;

    return {
      opacity: useTransform(scrollYProgress, [fadeStart, fadeEnd], [0, 1]),
      blur: useTransform(
        scrollYProgress,
        [fadeStart, fadeEnd],
        ["blur(10px)", "blur(0px)"]
      ),
      x: useTransform(
        scrollYProgress,
        [animateStart, animateEnd],
        [`${pos.x}vw`, "0vw"],
        {
          ease: easeInOut,
        }
      ),
      y: useTransform(
        scrollYProgress,
        [animateStart, animateEnd],
        [`${pos.y}vh`, `${pos.y + 20}vh`],
        {
          ease: easeInOut,
        }
      ),
      scale: useTransform(
        scrollYProgress,
        [scaleStart, scaleEnd],
        [pos.scale, 0]
      ),
    };
  });

  return (
    <>
      <StyledSection>
        <ScrollLayout height="1000vh" ref={scrollRef}>
          {/* {images.map((image, index) => (
            <ImageWrapper
              key={index}
              style={{
                opacity: imageAnimations[index].opacity,
                // x: imageAnimations[index].x,
                y: imageAnimations[index].y,
                scale: imageAnimations[index].scale,
                // filter: imageAnimations[index].blur,
              }}
            >
              <Card>
                <Image src={image.src} alt="" />
              </Card>
            </ImageWrapper>
          ))} */}

          <Container>
            <Row>
              <Col xs={10} lg={6} offset={{ xs: 1, lg: 3 }}>
                <H1
                  style={{
                    x: h1X,
                    marginLeft: h1XmMargin,
                  }}
                >
                  <BoxWrapper style={{ rotate: boxRotation, scale: boxScale }}>
                    <Card>
                      <Box />
                    </Card>
                  </BoxWrapper>

                  {words.map((word, index) => (
                    <H1Span
                      key={index}
                      style={{
                        opacity: wordAnimations[index].opacity,
                        y: wordAnimations[index].y,
                        filter: wordAnimations[index].blur,
                      }}
                    >
                      {word}
                    </H1Span>
                  ))}
                </H1>
              </Col>
            </Row>
          </Container>
        </ScrollLayout>
      </StyledSection>

      <ThreeScene />
    </>
  );
};

export default Hero;
