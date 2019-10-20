import React, { useState, useEffect } from "react";
import { useInput } from "rooks";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import {
  BodyContainer,
  SentencesContainer,
  Header,
  InputContainer,
  InputBox,
  SubmitButton
} from "./styles";

function RandomSentencePage() {
  const myInput = useInput("");
  const [sentenceObject, setSentenceObject] = useState({});
  const [showAlternateSentences, setShowAlternateSentences] = useState(false);

  const searchSuggest = (searchText) => {

    let params = {
        "searchText": searchText,
      }
      let query = Object.keys(params)
                   .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                   .join('&');
      let url = 'http://localhost:500/search-suggestion?' + query
    fetch(url)
      .then(res => res.json())
      .then(res => {
   console.log(res)
      })
      .catch(() => console.log("error"));
  };
  useEffect(() => {
    fetch("http://localhost:500/search-random")
      .then(res => res.json())
      .then(res => {
        setSentenceObject(res);
        console.log(res.childSentences[0].text);
      })
      .catch(() => console.log("error"));
  }, []);

  const newSentence = () => {
    setShowAlternateSentences(false);
    fetch("http://localhost:500/search-random")
      .then(res => res.json())
      .then(res => {
        setSentenceObject(res);
        console.log(res.childSentences[0].text);
      })
      .catch(() => console.log("error fetching sentence"));
  };

  const testSuggestion = () => {};
  return (
    <BodyContainer>
      <Header>Random Sentence</Header>
      <SentencesContainer>
        {sentenceObject.text}{" "}
        <div style={{ float: "right", marginRight: "5vw" }}>
          <button
            onClick={() => {
              setShowAlternateSentences(!showAlternateSentences);
            }}
          >
            {showAlternateSentences
              ? "Hide Sentences"
              : "Show Alternative Sentences"}
          </button>
          <button
            onClick={() => {
              searchSuggest('nulla')
            }}
          >
            New Sentence
          </button>
        </div>
        <br />
        <br />
        {showAlternateSentences && (
          <div>
            {sentenceObject.childSentences
              ? sentenceObject.childSentences.map((item, index) => (
                  <div key={`alt-sentence ${index}`}>{item.text}</div>
                ))
              : "loading"}
          </div>
        )}
        <InputContainer>
          <InputBox {...myInput} />
          <br />
          <SubmitButton onClick={() => {}}>Submit</SubmitButton>
        </InputContainer>
      </SentencesContainer>
    </BodyContainer>
  );
}

export default RandomSentencePage;
