import styled, { css } from "styled-components";
import { Button as Btn } from "reactstrap";

export const Button = styled(Btn)`
  border-radius: 4px;
  font-family: Muli;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  padding: 14px 20px;
  ${(props) =>
    props.veriant === "primary" &&
    css`
      border: solid 1px #31855c;
      background-color: #31855c;
      &:hover {
        background: transparent;
        color: #31855c;
        border: 1px solid #31855c;
      }
    `};
  ${(props) =>
    props.veriant === "secoundary" &&
    css`
      border: solid 1px #ffffff;
      background-color: transparent;
      &:hover {
        background: #31855c;
        color: #ffffff;
        border: 1px solid #31855c;
      }
    `};
`;
