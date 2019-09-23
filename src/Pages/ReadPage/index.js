import React, { useState } from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, SentencesContainer, Header, InputContainer,InputBox, SubmitButton } from "./styles";
import { useInput } from "rooks";

function ReadPage() {
  const [{ sentences }, sentenceDispatch] = useStateValue();
  const [addingSentence, setAddingSentence] = useState(false);
  const [focusedSentence, setFocusedSentence] = useState(null);
  const myInput = useInput("")
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
          <br/>  <br/>
          {focusedSentence.alternateSentences.map(item => (
            <div>{item}</div>
          ))}
          <br/>
          <InputContainer>
        <InputBox {...myInput} />
        <br />
        <SubmitButton
          onClick={() => {
          //  submitSentence();
          }}
        >
          Submit
        </SubmitButton>
      </InputContainer>
          <button
            onClick={() => {
              setFocusedSentence(null);
              setAddingSentence(false);
            }}
          >
            X
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
