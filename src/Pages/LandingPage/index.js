import React, { useState, useEffect } from "react";
import useResizeAware from "react-resize-aware";
//import Sentence from "../../Components/Sentence";
import fetchRandomSentence from "../../ServerAPI/fetchRandomSentence.js";

import { BodyContainer, Title, Sentence, Button, InputBox} from "./style2.js";
//import AlternateSentence from "../../Components/AlternateSentence";
// import LinkButton from "../../Components/LinkButton";
// import { useStateValue } from "../../State/StateProvider";
// import {
//   AlternateSentence,
//   BodyContainer,
//   SentenceContainer,
//   AllSentencesContainer,
//   InputContainer,
//   Title,
//   Header,
//   ShowSentencesButton,
//   MainSentence,
//   InputBox
// } from "./styles";

function HomePage() {
  const [sentenceObject, setSentenceObject] = useState({});
  const [showAlternateSentences, setShowAlternateSentences] = useState(false);
  const [mainSentenceTopPosition, setMainSentenceTopPosition] = useState("60%");
  const [currentAltIndex, setCurrentAltIndex] = useState(0);
  const [newSentence, setNewSentence] = useState(0);

  const [resizeListener, sizes] = useResizeAware();
  useEffect(() => {
    fetchRandomSentence(setShowAlternateSentences, setSentenceObject);
  }, []);

  return (
    <BodyContainer>
      <Title>Syntax Battles</Title>
      <Sentence fontSize={'40px'} row={showAlternateSentences ? 2 : 3}>
        {sentenceObject.text}
      </Sentence>
      {showAlternateSentences && sentenceObject.childSentences && (
            <Sentence row={3}>{sentenceObject.childSentences[currentAltIndex].text}</Sentence>
         )}
      <Button
        row={5}
        column={2}
        onClick={() => {
          setShowAlternateSentences(!showAlternateSentences);
        }}
      >
        Different version
      </Button>
      <Button
        row={5}
        column={4}
        onClick={() => {
          fetchRandomSentence(setShowAlternateSentences, setSentenceObject);
        }}
      >
      Show new sentence
      </Button>
      <InputBox fontSize={40}/>
    </BodyContainer>

    // <BodyContainer>
    //   {resizeListener}
    //   <Header />
    //   <Title>Syntax Battles</Title>
    //   <Header colStart={10}>

    //   </Header>
    //   <AllSentencesContainer>
    //     <SentenceContainer animationSpeed={200} top={mainSentenceTopPosition}>
    //       <MainSentence showAlternateSentences={showAlternateSentences}>
    //         {sentenceObject.text}
    //       </MainSentence>
    //     </SentenceContainer>
    //     <SentenceContainer
    //       animationSpeed={200}
    //       opacity={showAlternateSentences ? 1 : 0}
    //     >
    //       {showAlternateSentences && sentenceObject.childSentences && (
    //         <AlternateSentence>{sentenceObject.childSentences[currentAltIndex].text}</AlternateSentence>
    //       )}
    //     </SentenceContainer>

    //   </AllSentencesContainer>
    //   <InputContainer>
    //     <InputBox/>
    //   </InputContainer>
    //   <button
    //       onClick={() => {
    //         showAlternateSentences
    //           ? setTimeout(
    //               () =>
    //                 fetchRandomSentence(
    //                   setShowAlternateSentences,
    //                   setSentenceObject
    //                 ),
    //               100
    //             )
    //           : fetchRandomSentence(
    //               setShowAlternateSentences,
    //               setSentenceObject
    //             );

    //         setMainSentenceTopPosition("60%");
    //         setShowAlternateSentences(false);
    //       }}
    //     >
    //       Random New Sentence
    //     </button>
    //     <ShowSentencesButton
    //       onClick={() => {
    //         setMainSentenceTopPosition(
    //           mainSentenceTopPosition === "30%" ? "60%" : "30%"
    //         );
    //         setShowAlternateSentences(!showAlternateSentences);
    //       }}
    //     >
    //       {showAlternateSentences
    //         ? "Hide alternative versions"
    //         : "Show alternative versions"}
    //     </ShowSentencesButton>
    // </BodyContainer>
  );
}

export default HomePage;
