import React from 'react';
import {
 SentenceContainer
  } from "./styles";
const Sentence = ({text}) => {
  return <SentenceContainer>{text}</SentenceContainer>;
}

export default Sentence;