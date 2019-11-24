import React, { useState, useEffect } from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import useResizeAware from "react-resize-aware";
import Sentence from "../../Components/Sentence";
import AlternateSentence from "../../Components/AlternateSentence";

import {
  BodyContainer,
  SentenceContainer,
  InputContainer,
  Title,
  HeaderLeft,
  HeaderRight
} from "./styles";

function HomePage() {
  const [sentenceObject, setSentenceObject] = useState({});
  const [showAlternateSentences, setShowAlternateSentences] = useState(false);
  const [resizeListener, sizes] = useResizeAware();
  useEffect(() => {
    fetchRandomSentence();
  }, []);

  const fetchRandomSentence = async () => {
    setShowAlternateSentences(false);
    const response = await fetch("http://localhost:500/search-random")
      .then(res => res.json())
      .then(res => {
        setSentenceObject(res);
        console.log(res.childSentences[0].text);
      })
      .catch(() => console.log("error fetching sentence"));
    return response;
  };

  return (
    <BodyContainer>
      {resizeListener}
      <HeaderLeft />
      <Title>Syntax Battles</Title>
      <HeaderRight>
        <button
          onClick={() => {
            fetchRandomSentence();
          }}
        >
          Random New Sentence
        </button>
      </HeaderRight>
      <SentenceContainer>
        <Sentence margin={"2vh"} text={sentenceObject.text} />

        {showAlternateSentences && sentenceObject.childSentences
          ? sentenceObject.childSentences.map((item, index) => (
              <AlternateSentence key={`alt-sentence ${index}`} text={item.text}>
                <br />
              </AlternateSentence>
            ))
          : ""}
        <button
          onClick={() => {
            setShowAlternateSentences(!showAlternateSentences);
          }}
        >
          {showAlternateSentences
            ? "Hide alternative versions"
            : "Show alternative versions"}
        </button>
      </SentenceContainer>
      {/* {showAlternateSentences && sentenceObject.childSentences
          ? sentenceObject.childSentences.map((item, index) => (
              <AlternateSentence key={`alt-sentence ${index}`} text={item.text}>
                <br />
              </AlternateSentence>
            ))
          : ""}
        {showAlternateSentences ? (
          <React.Fragment>
            <Sentence margin={"2vh"} text={sentenceObject.text} />
            <button
              onClick={() => {
                setShowAlternateSentences(false);
              }}
            >
              Hide alternative versions
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Sentence margin={"12vh"} text={sentenceObject.text} />
            <button
              onClick={() => {
                setShowAlternateSentences(true);
              }}
            >
              Show alternative versions
            </button>
          </React.Fragment>
        )} */}

      <InputContainer>
        <input></input>
      </InputContainer>
    </BodyContainer>
  );
}

export default HomePage;
