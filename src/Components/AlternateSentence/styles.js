import styled from "styled-components";
import { device, fontSize } from '../../Constants/devices.js';

const altSentenceFontSizeModifier = .6;

const AlternateSentenceContainer = styled.div`
text-align: center;
  
margin: auto;

@media ${device.mobileS} {
  font-size:${fontSize.mobileS * altSentenceFontSizeModifier}px;
}
@media ${device.mobileM} {

  font-size:${fontSize.mobileM * altSentenceFontSizeModifier}px;
}
@media ${device.mobileL} {

  font-size:${fontSize.mobileL * altSentenceFontSizeModifier}px;
}
@media ${device.tablet}   {

  font-size:${fontSize.tablet * altSentenceFontSizeModifier}px;
}

@media ${device.laptop} {

  font-size:${fontSize.laptop * altSentenceFontSizeModifier}px;
}
@media ${device.laptopL} {

  font-size:${fontSize.laptopL * altSentenceFontSizeModifier}px;
}
@media ${device.desktop} {

  font-size:${fontSize.desktop * altSentenceFontSizeModifier}px;
}
@media ${device.desktopL} {

  font-size:${fontSize.desktopL * altSentenceFontSizeModifier}px;
`;

export {
    AlternateSentenceContainer
  };