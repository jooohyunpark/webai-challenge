import styled from "styled-components";

export const StyledCard = styled.div`
  transition: transform 0.1s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;

  box-shadow: 0 0 10px transparent;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }
`;
