import styled from "styled-components";

const Header = styled.h1`
  grid-area: header;
  background-color: whitesmoke;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const BodyContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "messages messages messages"
    "messages messages messages";
  grid-template-rows: 0.5fr 1fr 3fr;
  grid-template-columns: 25% 50% 25%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
  width: 100vw;
`;

const SentencesContainer = styled.span`
  grid-area: messages;
  background-color: whitesmoke;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const InputBox = styled.input`
  width: 70vw;
  height: 5vh;
  text-align: center;
  font-size: 28px;
  margin-top: 5vh;
`;
const InputContainer = styled.h1`
  grid-area: input;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 10vw;
  height: 5vh;
  font-size: 20px;
  margin-top: 12px;
`;
export {
  BodyContainer,
  SentencesContainer,
  Header,
  InputBox,
  InputContainer,
  SubmitButton
};
