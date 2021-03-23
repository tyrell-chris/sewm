import React from "react";
import { Container, Row, Col } from "reactstrap";
import Paragraph from "../../components/Paragraph/Index";
import Heading from "./../../components/SubHeading/Index";
import Button from "./../../components/Button/Index";
import RightImage from "./../../images/section3.png";
import {
  SectionWrapper,
  SectionTitle,
  ContentWrapper,
  InnerSectionWrapper,
  ImageWrapper,
  Aurthor,
} from "./styles";

const Index = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="6">
            <SectionTitle>Traceability</SectionTitle>
            <ContentWrapper>
              <Heading>Where does your coffee come from?</Heading>
              <Paragraph>
                Discover how we're reinventing the global supply chain
              </Paragraph>
            </ContentWrapper>
            <Button veriant="primary" size="lg" className="px-5">
              Learn about traceability
            </Button>
          </Col>
          <Col xs="12" md="6">
            <img src={RightImage} alt="section image" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col xs="12 px-5">
            <InnerSectionWrapper>
              <Row>
                <Col xs="12" sm="6" md="5">
                  <ImageWrapper>
                    <img
                      src={RightImage}
                      alt="section image"
                      className="img-fluid"
                    />
                  </ImageWrapper>
                </Col>
                <Col xs="12" sm="6" md="7">
                  <SectionTitle className="text-white">
                    The problem
                  </SectionTitle>
                  <Heading className="text-white">
                    Today, this price - and by extension the livelihoods of
                    those who depend on that market - is in crisis.
                  </Heading>
                  <Aurthor>- Micheal Paul Light, LA Times</Aurthor>
                  <Button veriant="secoundary" size="lg" className="px-5">
                    Learn about traceability
                  </Button>
                </Col>
              </Row>
            </InnerSectionWrapper>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Index;
