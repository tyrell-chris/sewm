import React from "react";
import { Paragraph } from "./styles";
const Index = (props) => {
  const { className } = props;
  return <Paragraph className={className}>{props.children}</Paragraph>;
};

export default Index;
