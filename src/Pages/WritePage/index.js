import React from "react";
import { useStateValue } from "../../State/StateProvider";
// import { useInput } from "../../Hooks/useInput";
import { useInput} from "rooks";
import LinkButton from "../../Components/LinkButton";
import {
  BodyContainer,
  Header,
  InputContainer,
  FeedbackContainer
} from "./styles";

function WritePage() {
  const [{ page }] = useStateValue();
  const [{ sentence }, sentenceDispatch] = useStateValue();


  const submitSentence = () => {

    sentenceDispatch({
      type: "changeSentence",
      newSentence: myInput.value
    });
  };

  const myInput = useInput("Write sentence here");
  return (
    <BodyContainer background="grey">
      <Header>
        {page} is the page im on.
        <LinkButton title={"Read"} to={"/read"} />
        <LinkButton title={"Landing"} to={"/"} />
      </Header>
      <FeedbackContainer>
        <p>The current sentence is:</p> <p>{myInput.value}</p>
      </FeedbackContainer>

      <InputContainer>
      <div>
      <input {...myInput} />
      <br/>
      <button onClick={()=>{submitSentence()}}>Submit</button>
      <p>
      <p>
        Last value was:<p><b>{sentence}</b></p> 
      </p>
      </p>
     </div>

      </InputContainer>
    </BodyContainer>
  );
}

export default WritePage;
