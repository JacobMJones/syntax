import React from "react";
import { useStateValue } from "../../State/StateProvider";
import { useInput } from "rooks";
import LinkButton from "../../Components/LinkButton";
import {
  BodyContainer,
  Header,
  InputContainer,
  FeedbackContainer
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

  const myInput = useInput("Write sentence here", {
   // validate: (newValue) => /[A-Z]/.test( newValue[0]) 
  });

  return (
    <BodyContainer background="grey">
      <Header>
        Write.
        <LinkButton title={"Read"} to={"/read"} />
        <LinkButton title={"Landing"} to={"/"} />
      </Header>
      <FeedbackContainer>
        <p>The current sentence is:</p>
         <p>{myInput.value}</p>
      </FeedbackContainer>
      <InputContainer>
        <div>
          <input {...myInput} />
          <br />
          <button
            onClick={() => {
              submitSentence();
            }}
          >
            Submit
          </button>
          <p>
            <p>
              Last value was:
              <p>
                <b>{sentences[sentences.length - 1]}</b>
              </p>
            </p>
          </p>
        </div>
      </InputContainer>
    </BodyContainer>
  );
}

export default WritePage;
