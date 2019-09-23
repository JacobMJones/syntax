import React, { useState } from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, SentencesContainer, Header } from "./styles";
import { statement } from "@babel/template";

function ReadPage() {
  const [{ sentences }, sentenceDispatch] = useStateValue();
  const [addingSentence, setAddingSentence] = useState(false);
  const [focusedSentence, setFocusedSentence] = useState(null);
  return (
    <BodyContainer>
      <Header>
        Read.
        <LinkButton title={"Write"} to={"/write"} />
        <LinkButton title={"Landing"} to={"/"} />
      </Header>
      {addingSentence ? (
        <SentencesContainer>
          {focusedSentence.originalSentence}
          <button
                onClick={() => {
                  setFocusedSentence(null);
                  setAddingSentence(false);
                }}
              >
                rewrite
              </button> 
        </SentencesContainer>
      ) : (
        <SentencesContainer>
          {sentences.map(item => (
            <div style={{ background: "lightblue", marginTop: "10px" }}>
              <div>{item.originalSentence}</div>
              <button
                onClick={() => {
                  setFocusedSentence(item);
                  setAddingSentence(true);
                }}
              >
                rewrite
              </button>
            </div>
          ))}
        </SentencesContainer>
      )}
    </BodyContainer>
  );
}

export default ReadPage;
