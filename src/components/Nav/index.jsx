import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px 0;
`;

const NavContent = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <Container>
          <Row>
            <Col xs={6}>ddd</Col>
            <Col xs={6}>Login</Col>
          </Row>
        </Container>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
