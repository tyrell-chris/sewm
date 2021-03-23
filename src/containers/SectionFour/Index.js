import React from "react";
import { Container, Row, Col } from "reactstrap";
import Heading from "./../../components/SubHeading/Index";
import {
  SectionWrapper,
  ContentWrapper,
  SectionTitle,
  ImageWrapper,
} from "./styles";
import LeftImage from "./../../images/hero.png";
import Paragraph from "../../components/Paragraph/Index";
import Button from "./../../components/Button/Index";

const Index = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="6" className="overflow-hidden">
            <ImageWrapper>
              <img src={LeftImage} alt="section image" className="img-fluid" />
            </ImageWrapper>
          </Col>
          <Col xs="12" sm="12" md="6">
            <ContentWrapper>
              <SectionTitle>Traceability</SectionTitle>
              <Heading>Coffee produced by optimistic capitalism</Heading>
              <Paragraph>
                By keeping sustainability and traceability at our core, everyone
                in the coffee supply chain benefits.
              </Paragraph>
              <Button veriant="primary" size="lg" className="px-5">
                Learn about traceability
              </Button>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Index;
