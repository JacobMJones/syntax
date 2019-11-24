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
  AllSentencesContainer,
  InputContainer,
  Title,
  Header,
  ShowSentencesButton,
  MainSentence
} from "./styles";

function HomePage() {
  const [sentenceObject, setSentenceObject] = useState({});
  const [showAlternateSentences, setShowAlternateSentences] = useState(false);
  const [mainSentenceTopPosition, setMainSentenceTopPosition] = useState("60%");
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
            showAlternateSentences
              ? setTimeout(
                  () =>
                    fetchRandomSentence(
                      setShowAlternateSentences,
                      setSentenceObject
                    ),
                  100
                )
              : fetchRandomSentence(
                  setShowAlternateSentences,
                  setSentenceObject
                );

            setMainSentenceTopPosition("60%");
            setShowAlternateSentences(false);
          }}
        >
          Random New Sentence
        </button>
      </Header>
      <AllSentencesContainer>
        <SentenceContainer animationSpeed={200} top={mainSentenceTopPosition}>
          <MainSentence showAlternateSentences={showAlternateSentences}>
            {sentenceObject.text}
          </MainSentence>
        </SentenceContainer>
        <SentenceContainer
          animationSpeed={200}
          opacity={showAlternateSentences ? 1 : 0}
        >
          {showAlternateSentences &&
            sentenceObject.childSentences &&
            sentenceObject.childSentences.map((item, index) => (
              <AlternateSentence key={`alt-sentence ${index}`} text={item.text}>
                <br />
              </AlternateSentence>
            ))}
        </SentenceContainer>
        <ShowSentencesButton
          onClick={() => {
            setMainSentenceTopPosition(
              mainSentenceTopPosition === "0%" ? "60%" : "0%"
            );
            setShowAlternateSentences(!showAlternateSentences);
          }}
        >
          {showAlternateSentences
            ? "Hide alternative versions"
            : "Show alternative versions"}
        </ShowSentencesButton>
      </AllSentencesContainer>

      <InputContainer>
        <input></input>
      </InputContainer>
    </BodyContainer>
  );
}

export default HomePage;
