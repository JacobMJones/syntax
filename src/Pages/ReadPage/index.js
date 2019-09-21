import React from "react";
import LinkButton from "../../Components/LinkButton"
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, MessagesContainer, Header } from "./styles";

function ReadPage() {
  const [{ page }] = useStateValue();
  return (
    <BodyContainer>
      <Header>
        {page} is the page im on.
        <LinkButton title={"Write"} to={'/write'} />
        <LinkButton title={"Landing"} to={'/'} />
      </Header>
      <MessagesContainer>
     
      </MessagesContainer>
    </BodyContainer>
  );
}

export default ReadPage;

