import styled from "styled-components";
import { device, fontSize } from '../../Constants/devices.js';

const altSentenceFontSizeModifier = .6;

const InputBox = styled.input`
width:60vw;
height:10vh;
font-size:3vw;
`

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
  //background-color: orange;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const Header = styled.h1`
  grid-column: col-start ${props => props.colStart || 1} / span 3;
  grid-row: 1;
  //background-color: purple;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;
const NavButton = styled.button`
  margin-right: 30vw;
`;

const AllSentencesContainer = styled.span`
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


`
const SentenceContainer = styled.span`
position: relative;
top: ${props => props.top || 0};
opacity: ${props => props.opacity};
transition: all ${props => props.animationSpeed}ms ease-in-out; 
`;

const MainSentence = styled.div`
text-align: center;
@media ${device.mobileS} {
  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 25 : 45}px;
}
@media ${device.mobileM} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 30 : 50}px;
}
@media ${device.mobileL} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 35 : 55}px;
}
@media ${device.tablet}   {
  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 40 : 60}px;
}

@media ${device.laptop} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 45 : 65}px;
}
@media ${device.laptopL} {

transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 50 : 70}px;
}
@media ${device.desktop} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 55 : 75}px;
}
@media ${device.desktopL} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 60 : 80}px;
}

`
const AlternateSentence = styled.div`

text-align: center;
@media ${device.mobileS} {
  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 5 : 20}px;
}
@media ${device.mobileM} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 5 : 20}px;
}
@media ${device.mobileL} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 10: 30}px;
}
@media ${device.tablet}   {
  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 15 : 35}px;
}

@media ${device.laptop} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 20 : 40}px;
}
@media ${device.laptopL} {

transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 25 : 45}px;
}
@media ${device.desktop} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 30 : 50}px;
}
@media ${device.desktopL} {

  transition: all 200ms 50ms ease-in-out;
  font-size:${props => props.showAlternateSentences ? 35 : 55}px;
}

`
export {
  AlternateSentence,
  SentenceContainer,
  BodyContainer,
  InputContainer,
  AllSentencesContainer,
  Title,
  NavButton,
  Header,
  ShowSentencesButton,
  MainSentence,
  InputBox

};
