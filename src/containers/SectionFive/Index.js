import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "./../../components/Button/Index";
import Heading from "./../../components/SubHeading/Index";
import Paragraph from "./../../components/Paragraph/Index";
import ReviewCard from "./../../components/ReviewCard/Index";
import Avatar from "./../../images/avatar.png";
import {
  SectionWrapper,
  ContentWrapper,
  ActionsWrapper,
  SectionTitle,
} from "./styles";

const Index = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="4" className="overflow-hidden">
            <ContentWrapper>
              <SectionTitle>Testimonials</SectionTitle>
              <Heading>Our community is our team</Heading>
              <Paragraph>
                Sharing knowlodge and grewing togheter. A platform create and
                supported through who care, loves, work with coffee.
              </Paragraph>
              <ActionsWrapper>
                <Button veriant="primary" size="lg" className="px-5">
                  Join today
                </Button>
                <Button veriant="primary" size="lg">
                  View our community
                </Button>
              </ActionsWrapper>
            </ContentWrapper>
          </Col>
          <Col xs="12" sm="12" md="4">
            <ReviewCard
              para="Era of We helped us achieve a 35% higher success rate and establish a relationship with our farmer. Additionally, we’ve also seen a 80% reduction in customer support tickets. Era of we has become our primary purchasing tool for green coffee buying and selling our roasted coffee to our vendors."
              src={Avatar}
              name="Arshad Nawaz"
              role="Product Manager"
            ></ReviewCard>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Index;
