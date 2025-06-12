import { Container, Row, Col } from "react-grid-system";
import ScrollLayout from "@/components/ScrollLayout";
import { useState, useRef, useMemo } from "react";
import { useScroll, useTransform, easeInOut } from "motion/react";
import Card from "@/components/Card";
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

const Hero = () => {
  const scrollRef = useRef(null);
  const boxRef = useRef(null);

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
  const imageAnimations = useMemo(() => {
    const imageCount = 12;

    return Array.from({ length: imageCount }).map((_, index) => {
      const pos = {
        x: Math.random() * 80 - 40, // Random position between -40% and 40%
        y: Math.random() * 80 - 40,
        scale: 0.5 + Math.random() * 0.5, // Random scale between 0.5 and 1
      };

      const fadeStart = 0.2 + (index * 0.05) / imageCount;
      const fadeEnd = fadeStart + 0.1;

      const introStart = 0.45 + (index * 0.2) / imageCount; // Staggered start similar to words
      const introEnd = introStart + 0.1;

      return {
        opacity: useTransform(scrollYProgress, [fadeStart, fadeEnd], [0, 1]),
        x: useTransform(
          scrollYProgress,
          [introStart, introEnd],
          [`${pos.x}vw`, "0vw"],
          {
            ease: easeInOut,
          }
        ),
        y: useTransform(
          scrollYProgress,
          [introStart, introEnd],
          [`${pos.y}vh`, "0vh"],
          {
            ease: easeInOut,
          }
        ),
        scale: useTransform(
          scrollYProgress,
          [introStart, introEnd],
          [pos.scale, 1]
        ),
      };
    });
  }, [scrollYProgress]);

  return (
    <StyledSection style={{ position: "relative" }}>
      <ScrollLayout height="1000vh" ref={scrollRef}>
        {Array.from({ length: 12 }).map((_, index) => (
          <ImageWrapper key={index}>
            <Image
              src={`/${index + 1}.png`}
              alt=""
              style={{
                opacity: imageAnimations[index].opacity,
                scale: imageAnimations[index].scale,
                x: imageAnimations[index].x,
                y: imageAnimations[index].y,
              }}
            />
          </ImageWrapper>
        ))}

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
  );
};

export default Hero;
