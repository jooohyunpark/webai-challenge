import React, { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "@/components/Image";
import Parallax from "@/components/Parallax";
import Card from "@/components/Card";
import { useTransform, useScroll } from "framer-motion";
import {
  GalleryContainer,
  CarouselView,
  GridView,
  CarouselItem,
  GridItem,
} from "./styles";

const Gallery = ({ items = [], isCarousel = true, gridCount = 10 }) => {
  const ref = useRef(null);

  // Generate unique grid positions for items
  const usedPositions = new Set();
  const gridPositions = items.map(() => {
    let position;
    do {
      const col = Math.floor(Math.random() * gridCount) + 1;
      const row = Math.floor(Math.random() * gridCount) + 1;
      position = `${col},${row}`;
    } while (usedPositions.has(position));

    usedPositions.add(position);
    const [col, row] = position.split(",").map(Number);

    return {
      gridColumn: `${col} / span 1`,
      gridRow: `${row} / span 1`,
    };
  });

  return (
    <GalleryContainer
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false, amount: 0.75 }}
    >
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
              <CarouselItem
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Parallax
                  velocity={150 - 300 * Math.random()}
                  scaleVelocity={0.5 * Math.random()}
                >
                  <Card>
                    <Image src={`/${item}.png`} alt="" />
                  </Card>
                </Parallax>
              </CarouselItem>
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
            style={{
              gridTemplateRows: `repeat(${gridCount}, 1fr)`,
              gridTemplateColumns: `repeat(${gridCount}, 1fr)`,
            }}
          >
            {items.map((item, index) => (
              <GridItem
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={gridPositions[index]}
              >
                <Card>
                  <Image src={`/${item}.png`} alt="" />
                </Card>
              </GridItem>
            ))}
          </GridView>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;
