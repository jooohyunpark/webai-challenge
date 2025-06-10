import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "@/components/Image";
import FadeIn from "@/components/FadeIn";
import Parallax from "@/components/Parallax";
import Card from "@/components/Card";
import {
  GalleryContainer,
  CarouselView,
  GridView,
  GalleryItem,
} from "./styles";

const Gallery = ({ items = [], isCarousel = true }) => {
  return (
    <GalleryContainer>
      <AnimatePresence mode="wait">
        {isCarousel ? (
          <CarouselView
            key="carousel"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <GalleryItem
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <FadeIn>
                  <Parallax
                    velocity={150 - 300 * Math.random()}
                    scaleVelocity={0.5 * Math.random()}
                  >
                    <Card>
                      <Image src={`/${item}.png`} alt="" />
                    </Card>
                  </Parallax>
                </FadeIn>
              </GalleryItem>
            ))}
          </CarouselView>
        ) : (
          <GridView
            key="grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <GalleryItem
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <FadeIn>
                  <Card>
                    <Image src={`/${item}.png`} alt="" />
                  </Card>
                </FadeIn>
              </GalleryItem>
            ))}
          </GridView>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;
