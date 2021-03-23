import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: ease-in-out all 0.5s;
  &:hover {
    p {
      display: block;
    }
  }
`;
export const Overlay = styled.div``;
export const Content = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 22px;
  padding-bottom: 10px;
`;
export const Para = styled.p`
  display: none;
  font-family: Muli;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0.57px;
  color: #ffffff;
`;
export const Title = styled.h3`
  font-family: CormorantGaramond;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0px;
  color: #ffffff;
`;
