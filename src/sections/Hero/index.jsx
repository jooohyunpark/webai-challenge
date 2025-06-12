import { Container, Row, Col } from "react-grid-system";
import ScrollLayout from "@/components/ScrollLayout";
import { useState, useRef, useEffect, useMemo } from "react";
import { useScroll, useTransform, motion, easeInOut } from "motion/react";
import { StyledSection, H1, Box, H1Span } from "./styles";

const text = `Discover, remix, and master AI visual creation using our prompt library built for designers`;

const Hero = () => {
  const scrollRef = useRef(null);
  const boxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");
  const wordCount = words.length;

  const h1X = useTransform(scrollYProgress, [0, 0.1], ["50%", "0%"]);
  const h1XmMargin = useTransform(scrollYProgress, [0, 0.1], ["-0.8em", "0em"]);

  const boxScale = useTransform(scrollYProgress, [0, 0.1], [3, 1]);
  const boxRotation = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0deg", "-180deg"],
    {
      ease: easeInOut,
    }
  );

  // Create arrays of opacity and y transforms for each word
  const wordAnimations = words.map((_, index) => {
    const start = 0.12 + (index * 0.15) / wordCount;
    const end = start + 0.1;

    return {
      opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
      y: useTransform(scrollYProgress, [start, end], [10, 0], {
        ease: easeInOut,
      }),
    };
  });

  return (
    <StyledSection style={{ position: "relative" }}>
      <ScrollLayout height="750vh" ref={scrollRef}>
        <Container>
          <Row>
            <Col xs={12} md={10} lg={6} offset={{ md: 1, lg: 3 }}>
              <H1 style={{ x: h1X, marginLeft: h1XmMargin }}>
                <Box style={{ rotate: boxRotation, scale: boxScale }} />

                {words.map((word, index) => (
                  <H1Span
                    key={index}
                    style={{
                      opacity: wordAnimations[index].opacity,
                      y: wordAnimations[index].y,
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
  );
};

export default Hero;
