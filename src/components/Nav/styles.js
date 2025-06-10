import styled from "styled-components";

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  font-size: 14px;
`;

export const NavContent = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 0;
`;

export const LoginLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`;
