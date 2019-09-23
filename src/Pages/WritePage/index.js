import React from "react";
import { useStateValue } from "../../State/StateProvider";
import { useInput } from "rooks";
import LinkButton from "../../Components/LinkButton";
import {
  BodyContainer,
  Header,
  InputContainer,
  CurrentSentenceContainer,
  LastSentenceContainer
} from "./styles";

function WritePage() {
  const [{ sentences }, sentenceDispatch] = useStateValue();

  const submitSentence = () => {
    let newSentenceArray = sentences;
    newSentenceArray.push(myInput.value);
    sentenceDispatch({
      type: "changeSentence",
      newSentence: newSentenceArray
    });
  };

  const myInput = useInput("", {
    // validate: (newValue) => /[A-Z]/.test( newValue[0])
  });

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
        <input {...myInput} />
        <br />
        <button
          onClick={() => {
            submitSentence();
          }}
        >
          Submit
        </button>
      </InputContainer>
      <LastSentenceContainer>
        Last sentence added:
        <p>{sentences[sentences.length - 1]}</p>
      </LastSentenceContainer>
    </BodyContainer>
  );
}

export default WritePage;
