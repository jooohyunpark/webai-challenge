import { Container, Row, Col } from "react-grid-system";
import Button from "@/components/Button";
import Gallery from "@/components/Gallery";
import FadeIn from "@/components/FadeIn";
import {
  StyledSection,
  HeroContent,
  H1,
  GalleryLayout,
  TextContent,
} from "./styles";
import { useState, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [isCarousel, setIsCarousel] = useState(true);

  const toggleView = () => {
    setIsCarousel(!isCarousel);
  };

  const h1Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: h1Ref,
  });

  const scale = useTransform(scrollYProgress, [0.4, 0.8], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  return (
    <StyledSection style={{ position: "relative" }}>
      <HeroContent>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <GalleryLayout>
                <Gallery
                  items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                  isCarousel={isCarousel}
                />
              </GalleryLayout>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} lg={6} offset={{ lg: 3 }}>
              <TextContent layout>
                <FadeIn>
                  <H1 ref={h1Ref} style={{ scale, opacity }}>
                    Discover, remix, and master AI visual creation using our
                    prompt library built for designers
                  </H1>
                </FadeIn>

                <FadeIn>
                  <Button onClick={toggleView}>
                    {isCarousel ? "View Grid" : "View Row"}
                  </Button>
                </FadeIn>
              </TextContent>
            </Col>
          </Row>
        </Container>
      </HeroContent>
    </StyledSection>
  );
};

export default Hero;
