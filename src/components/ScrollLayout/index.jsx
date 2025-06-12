import { forwardRef } from "react";
import styled from "styled-components";

export const StyledScrollLayout = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
`;

export const StickyContainerLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ScrollLayout = forwardRef(
  ({ height = "200vh", children = null }, ref) => (
    <StyledScrollLayout ref={ref} $height={height}>
      <StickyContainerLayout>{children}</StickyContainerLayout>
    </StyledScrollLayout>
  )
);

export default ScrollLayout;
