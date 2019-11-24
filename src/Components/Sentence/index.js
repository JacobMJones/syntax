import React from 'react';
import {
 SentenceContainer
  } from "./styles";
const Sentence = ({text}) => {
  return <SentenceContainer multiple={2}>{text}</SentenceContainer>;
}

export default Sentence;