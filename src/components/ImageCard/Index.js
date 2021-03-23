import React from "react";
import { CardWrapper, Overlay, Content, Title, Para } from "./styles";

const Index = (props) => {
  const { title, src } = props;
  return (
    <CardWrapper className="text-white">
      <Overlay>
        <img className="img-fluid" src={src} />
        <Content>
          <Title>{title}</Title>
          <Para>
            lorem sdfjaljf sdakljflas lfjlskd jflsja lfdjsla fldjsakf lddsjalj
          </Para>
        </Content>
      </Overlay>
    </CardWrapper>
  );
};

export default Index;
