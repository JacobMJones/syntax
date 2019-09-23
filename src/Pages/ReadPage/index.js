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

  const submitAlternateSentence = () => {
    let newSentenceArray = sentences;
   // newSentenceArray.push({originalSentence:myInput.value, alternateSentences:[]});
   let index = newSentenceArray.indexOf(focusedSentence)
   newSentenceArray[index].alternateSentences.push(myInput.value)
   console.log('index', index)
    sentenceDispatch({
      type: "changeSentence",
      newSentence: newSentenceArray
    });
  };

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
           submitAlternateSentence();
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
