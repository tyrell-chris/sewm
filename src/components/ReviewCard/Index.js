import React from "react";
import {
  CardWrapper,
  Content,
  Para,
  InnerWrapper,
  UserDetails,
  Role,
  Name,
} from "./styles";

const Index = (props) => {
  const { para, src, name, role } = props;
  return (
    <CardWrapper className="text-white">
      <Content>
        <Para>{para}</Para>
        <InnerWrapper>
          <img src={src} />
          <UserDetails>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </UserDetails>
        </InnerWrapper>
      </Content>
    </CardWrapper>
  );
};

export default Index;
