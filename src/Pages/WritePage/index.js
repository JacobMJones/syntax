import React from "react";
import { useStateValue } from "../../State/StateProvider";
import { useInput } from "rooks";
import LinkButton from "../../Components/LinkButton";
import {
  BodyContainer,
  Header,
  InputContainer,
  CurrentSentenceContainer,
  LastSentenceContainer,
  InputBox,
  SubmitButton
} from "./styles";

function WritePage() {
  const [{ sentences }, sentenceDispatch] = useStateValue();

  const submitSentence = () => {
    let newSentenceArray = sentences;
    newSentenceArray.push({originalSentence:myInput.value, alternateSentences:[]});
    sentenceDispatch({
      type: "changeSentence",
      newSentence: newSentenceArray
    });
  };

  const myInput = useInput("add sentence here");

  return (
    <BodyContainer background="grey">
      <Header>
        Write.
        <LinkButton title={"Read"} to={"/read"} />
        <LinkButton title={"Landing"} to={"/"} />
      </Header>
      <CurrentSentenceContainer>
        <p>The current sentence is:</p>
        <p>{myInput.value}</p>
      </CurrentSentenceContainer>
      <InputContainer>
        <InputBox {...myInput} />
        <br />
        <SubmitButton
          onClick={() => {
            submitSentence();
          }}
        >
          Submit
        </SubmitButton>
      </InputContainer>
      
      <LastSentenceContainer>
        Last sentence added:
        <p>{sentences[sentences.length - 1].originalSentence}</p>
      </LastSentenceContainer>
    </BodyContainer>
  );
}

export default WritePage;
