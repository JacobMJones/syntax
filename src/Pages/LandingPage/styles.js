import styled from "styled-components";
import { device, fontSize } from '../../Constants/devices.js';

const altSentenceFontSizeModifier = .6;


const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: repeat(12, [row-start] 1fr);
  grid-gap: 20px;
  height: 100vh;
  margin: 0;
  width: 100vw;
  position:absolute;
 
`;

const Title = styled.h1`
  grid-column: col-start 4 / span 6;
  grid-row: 1;
  background-color: orange;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const Header = styled.h1`
  grid-column: col-start ${props => props.colStart || 1} / span 3;
  grid-row: 1;
  background-color: purple;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;
const NavButton = styled.button`
  margin-right: 30vw;
`;

const SentenceContainer = styled.span`
  grid-column: col-start 1 / span 12;
  grid-row: row-start 2 / span 6;
  background-color: whitesmoke;
position: relative;
  width: 100%;
  height: 100%;
  display: grid;
`;
const InputContainer = styled.span`
  grid-column: col-start 1 / span 12;
  grid-row: row-start 8 / span 5;
  background-color: lightyellow;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const ShowSentencesButton = styled.button`
height:5vh;
width:10vw;
position:absolute;
left:83vw;
top:-40px;
`

export {

  BodyContainer,
  InputContainer,
  SentenceContainer,
  Title,
  NavButton,
  Header,
  ShowSentencesButton 
};
