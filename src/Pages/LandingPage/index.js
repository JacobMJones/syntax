import React, { useState, useEffect } from "react";
// import LinkButton from "../../Components/LinkButton";
// import { useStateValue } from "../../State/StateProvider";
import useResizeAware from "react-resize-aware";
import Sentence from "../../Components/Sentence";
import AlternateSentence from "../../Components/AlternateSentence";
import fetchRandomSentence from "../../ServerAPI/fetchRandomSentence.js";
import {
  BodyContainer,
  SentenceContainer,
  InputContainer,
  Title,
  Header,
  ShowSentencesButton
} from "./styles";

function HomePage() {
  const [sentenceObject, setSentenceObject] = useState({});
  const [showAlternateSentences, setShowAlternateSentences] = useState(false);
  const [resizeListener, sizes] = useResizeAware();
  useEffect(() => {
    fetchRandomSentence(setShowAlternateSentences, setSentenceObject);
  }, []);

  return (
    <BodyContainer>
      {resizeListener}
      <Header />
      <Title>Syntax Battles</Title>
      <Header colStart={10}>
        <button
          onClick={() => {
            fetchRandomSentence(setShowAlternateSentences, setSentenceObject);
          }}
        >
          Random New Sentence
        </button>
      </Header>
      <SentenceContainer>
        <Sentence margin={"2vh"} text={sentenceObject.text} />

        {showAlternateSentences &&
          sentenceObject.childSentences &&
          sentenceObject.childSentences.map((item, index) => (
            <AlternateSentence key={`alt-sentence ${index}`} text={item.text}>
              <br />
            </AlternateSentence>
          ))}
        <ShowSentencesButton
          onClick={() => {
            setShowAlternateSentences(!showAlternateSentences);
          }}
        >
          {showAlternateSentences
            ? "Hide alternative versions"
            : "Show alternative versions"}
        </ShowSentencesButton>
      </SentenceContainer>
      <InputContainer>
        <input></input>
      </InputContainer>
    </BodyContainer>
  );
}

export default HomePage;
