import React from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, MessagesContainer, Header } from "./styles";

function ReadPage() {
  const [{ sentences }, sentenceDispatch] = useStateValue();
  return (
    <BodyContainer>
      <Header>
        Read.
        <LinkButton title={"Write"} to={"/write"} />
        <LinkButton title={"Landing"} to={"/"} />
      </Header>
      <MessagesContainer>
        {sentences.map(item => (
          <div>{item.originalSentence}</div>
        ))}
      </MessagesContainer>
    </BodyContainer>
  );
}

export default ReadPage;
