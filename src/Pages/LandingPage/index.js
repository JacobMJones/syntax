import React, { useState, useEffect } from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import {
  BodyContainer,
  SentenceContainer,
  Sentence,
  InputContainer,
  Title,
  HeaderLeft,
  HeaderRight
} from "./styles";

function HomePage() {
  const [sentenceObject, setSentenceObject] = useState({});
  const [showAlternateSentences, setShowAlternateSentences] = useState(false);

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
      <HeaderLeft>Left</HeaderLeft>
      <Title>Syntax Battles</Title>
      <HeaderRight>
        <button
          onClick={() => {
            fetchRandomSentence();
          }}
        >
          New Sentence
        </button>
      </HeaderRight>
      <SentenceContainer>
        {" "}
        <Sentence>{sentenceObject.text}</Sentence>
      </SentenceContainer>
      <InputContainer></InputContainer>
    </BodyContainer>
  );
}

export default HomePage;
