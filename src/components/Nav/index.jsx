import React from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import { NavContainer, NavContent, LoginLayout } from "./styles";

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <Container>
          <Row>
            <Col xs={6}>
              <Row>
                <Col>AI Prompt Library</Col>
                <Visible lg xl xxl>
                  <Col>AI Design Workshop</Col>
                  <Col>Midjourney ChatGPT</Col>
                </Visible>
              </Row>
            </Col>
            <Col xs={6}>
              <LoginLayout>Login</LoginLayout>
            </Col>
          </Row>
        </Container>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
