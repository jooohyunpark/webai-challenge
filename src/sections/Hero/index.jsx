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
import { useState } from "react";

const Hero = () => {
  const [isCarousel, setIsCarousel] = useState(true);

  const toggleView = () => {
    setIsCarousel(!isCarousel);
  };

  return (
    <StyledSection>
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
            <Col xs={6} offset={{ xs: 3 }}>
              <TextContent layout>
                <FadeIn>
                  <H1>
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
