import React from "react";
import { Heading } from "./styles";

export default function Index(props) {
  const { className } = props;
  return <Heading className={className}>{props.children}</Heading>;
}
