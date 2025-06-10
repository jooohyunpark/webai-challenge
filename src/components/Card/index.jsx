import React, { useState, useRef } from "react";
import { StyledCard } from "./styles";

const Card = ({ children, intensity = 15 }) => {
  const cardRef = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate mouse position relative to card center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // normalize mouse position to -1 to 1
    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    setRotateX(normalizedY * -1);
    setRotateY(normalizedX);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <StyledCard
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${
          rotateX * intensity
        }deg) rotateY(${rotateY * intensity}deg)`,
      }}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
