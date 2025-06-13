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
  ThreeSceneWrapper,
} from "./styles";

const text = `Discover, remix, and master AI visual creation using our prompt library built for designers`;

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
    [0, 0.1, 0.5, 0.6, 0.63, 0.85, 0.95],
    [5, 1, 1, 1.4, 1, 1, 5]
  );
  const boxRotation = useTransform(
    scrollYProgress,
    [0, 0.1, 0.53, 0.53, 0.63, 0.85, 0.85, 0.95],
    [
      "0deg",
      "-180deg",
      "-180deg",
      "-180deg",
      "-360deg",
      "-360deg",
      "-360deg",
      "-90deg",
    ],
    {
      ease: easeInOut,
    }
  );

  // Create arrays of opacity and y transforms for each word
  const wordAnimations = words.map((_, index) => {
    const introStart = 0.12 + (index * 0.15) / wordCount;
    const introEnd = introStart + 0.1;

    const shadowStart = 0.53 + (index * 0.06) / wordCount;
    const shadowEnd = shadowStart + 0.05;

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
      textShadow: useTransform(
        scrollYProgress,
        [shadowStart, shadowEnd, shadowEnd + 0.1],
        [
          "0 0 5px rgba(0,0,0,0), 0 0 10px rgba(0,0,0,0), 0 0 15px rgba(0,0,0,0)",
          "0 0 5px #ccc, 0 0 10px #ccc, 0 0 15px #ccc",
          "0 0 5px rgba(0,0,0,0), 0 0 10px rgba(0,0,0,0), 0 0 15px rgba(0,0,0,0)",
        ]
      ),
    };
  });

  const threeSceneOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const threeScenePointerEvents = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.7, 0.8],
    ["none", "auto", "auto", "none"]
  );

  return (
    <>
      <StyledSection>
        <ScrollLayout height="1000vh" ref={scrollRef}>
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
                    <Box />
                  </BoxWrapper>

                  {words.map((word, index) => (
                    <H1Span
                      key={index}
                      style={{
                        opacity: wordAnimations[index].opacity,
                        y: wordAnimations[index].y,
                        filter: wordAnimations[index].blur,
                        textShadow: wordAnimations[index].textShadow,
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

      <ThreeSceneWrapper
        style={{
          opacity: threeSceneOpacity,
          pointerEvents: threeScenePointerEvents,
        }}
      >
        <ThreeScene />
      </ThreeSceneWrapper>
    </>
  );
};

export default Hero;
