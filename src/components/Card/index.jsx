import React, { useState, useRef } from "react";
import { StyledCard } from "./styles";

const Card = ({ children, intensity = 20 }) => {
  const cardRef = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card size
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // normalize mouse position to -1 to 1
    const normalizedX = Number(
      ((mouseX - rect.width / 2) / (rect.width / 2)).toFixed(2)
    );
    const normalizedY = Number(
      ((mouseY - rect.height / 2) / (rect.height / 2)).toFixed(2)
    );

    console.log(normalizedX, normalizedY);

    setRotateX(normalizedY);
    setRotateY(normalizedX * -1);
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
        transform: `perspective(400px) rotate3d(${rotateX * intensity}, ${
          rotateY * intensity
        }, 0, 15deg)`,
      }}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
