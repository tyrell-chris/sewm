import styled from "styled-components";

export const SectionWrapper = styled.div``;
export const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 100px 0 56px 0;
`;
export const SectionTitle = styled.h4`
  font-family: Muli;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.44px;
  color: #232334;
  text-transform: uppercase;
`;

export const ImageWrapper = styled.div`
  background: red;
  &:before {
    content: "";
    position: absolute;
    right: -25px;
    width: 80px;
    height: 80px;
    background: #fff;
    transform: rotate(45deg);
    overflow: hidden;
    top: 120px;
  }
`;
