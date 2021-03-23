import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Heading from "./../../components/SubHeading/Index";
import ImageCard from "./../../components/ImageCard/Index";
import { SectionWrapper } from "./styles";
import Card1 from "./../../images/card1.png";
import Button from "./../../components/Button/Index";

const Index = () => {
  const [data, setData] = useState([
    { title: "Estates", src: Card1 },
    { title: "Roasters", src: Card1 },
    { title: "Coffee Businesses", src: Card1 },
    { title: "End Users", src: Card1 },
  ]);
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="12" md={{ size: 10, offset: 1 }}>
            <Heading className="text-white text-center">
              A global coffee marketplace and community that connects consumers
              directly with coffee farmers, amplifying its value through
              one-on-one experiences.
            </Heading>
          </Col>
          {data.map((item) => {
            return (
              <Col xs="12" sm="6" md="6" lg="3">
                <ImageCard title={item.title} src={item.src} />
              </Col>
            );
          })}
          <Col xs="12" className="text-center">
            <Button veriant="secoundary" size="lg" className="px-5 mt-5">
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Index;
