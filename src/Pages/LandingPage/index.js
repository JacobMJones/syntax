import React from "react";
import { Body, Span } from "./styles";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, MessagesContainer, Header } from "./styles";
function HomePage() {

  const [{ title }] = useStateValue();
  return (
    <BodyContainer>
      <Header>
      {title} Welcome to the Terrordome!
      </Header>
      <MessagesContainer>
        <LinkButton title={"Write"} to={"/write"} />
        <LinkButton title={"Read"} to={"/read"} />
      </MessagesContainer>
    </BodyContainer>
  );
}

export default HomePage;
