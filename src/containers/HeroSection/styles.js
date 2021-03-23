import styled from "styled-components";
import Hero from "./../../images/hero.png";

export const SectionWrapper = styled.div`
  background-image: url("${Hero}");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
export const Heading = styled.h2`
  text-shadow: 0 4px 24px #000000;
  font-family: CormorantGaramond;
  font-size: 64px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: 0.01px;
  text-align: center;
  color: #ffffff;
  padding: 0 80px;
`;
