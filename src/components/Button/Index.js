import React from "react";
import { Button } from "./styles";

const Index = (props) => {
  const { handleClick, veriant, size, className } = props;
  return (
    <Button
      veriant={veriant}
      handleClick={handleClick}
      size={size}
      className={className}
    >
      {props.children}
    </Button>
  );
};

export default Index;
