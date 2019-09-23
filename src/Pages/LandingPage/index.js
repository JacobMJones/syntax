import React from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, MessagesContainer, Header } from "./styles";
function HomePage() {

  const [{ title }] = useStateValue();
  return (
    <BodyContainer>
      <Header>
      {title}
      </Header>
      <MessagesContainer>
        <LinkButton title={"Write"} to={"/write"} />
        <LinkButton title={"Read"} to={"/read"} />
      </MessagesContainer>
    </BodyContainer>
  );
}

export default HomePage;
