import React from "react";
import { Body, Span } from "./styles";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, MessagesContainer, Header } from "./styles";
function HomePage() {
  return (
    <BodyContainer>
      <Header>
        <h1>Syntax Battles! Welcome to the Terrordome!</h1>
      </Header>
      <MessagesContainer>
        <LinkButton title={"Write"} to={"/write"} />
        <LinkButton title={"Read"} to={"/read"} />
      </MessagesContainer>
    </BodyContainer>
  );
}

export default HomePage;
