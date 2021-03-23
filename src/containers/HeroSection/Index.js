import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SectionWrapper, Heading } from "./styles";
import Button from "./../../components/Button/Index";
export default function Index() {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="12" md={{ size: 10, offset: 1 }}>
            <Heading>A Global Community United By Transaparency</Heading>
            <Button veriant="primary" size="lg" className="px-5 mt-5">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
