import React, { useState, useEffect } from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { BodyContainer, SentencesContainer, Header, Title, InputContainer,InputBox, SubmitButton } from "./styles";
import { useInput } from "rooks";
import data from "../../Data/mock.json"
function ReadPage() {
  const [{ sentences }, sentenceDispatch] = useStateValue();
  const [addingSentence, setAddingSentence] = useState(false);
  const [focusedSentence, setFocusedSentence] = useState(null);
  const myInput = useInput("")
  const [s, setS] = useState('placeholder sentence');
  useEffect(() => setS('another sentence'), []);

  const submitAlternateSentence = () => {

  };

  return (
    <BodyContainer>
      <Header>
 
      Hell
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
          {data.map(item => (
            <div style={{ background: "lightblue", marginTop: "10px" }}>
              <div>{item.text}</div>
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
