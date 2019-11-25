import styled from "styled-components";

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, [col-start] 1fr);
  grid-template-rows: repeat(6, [row-start] 1fr);
  height: 100vh;
  margin: 0;
  width: 100vw;
  position: absolute;
`;

const Title = styled.h1`
  grid-column: col-start 4 / span 6;
  grid-row: 1;
  //background-color: orange;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const Sentence = styled.h1`
  grid-column: 2 / span 6;
  grid-row: ${props=> props.row};
  font-size: ${props=> props.fontSize};
  width: 100%;
  transition: all 200ms ease-in-out;
  //overflow: hidden;
`;

const Button = styled.button`
  grid-column: ${props=> props.column};
  grid-row: ${props=> props.row};

  text-align: center;
  font-size: 60px;
  width: 100%;
`;

const InputBox = styled.input`
width:60vw;
height:10vh;
font-size:3vw;
`

export { BodyContainer, Title, Sentence, Button, InputBox };
