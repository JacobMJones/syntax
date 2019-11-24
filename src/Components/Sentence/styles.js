import styled from "styled-components";
import { device, fontSize } from '../../Constants/devices.js';

const altSentenceFontSizeModifier = .6;

const SentenceContainer = styled.div`
  text-align: center;
  margin: ${props => props.margin && props.margin};
  transition: margin 400ms ease-in-out;
  @media ${device.mobileS} {
    font-size:${fontSize.mobileS}px;
  }
  @media ${device.mobileM} {

    font-size:${fontSize.mobileM}px;
  }
  @media ${device.mobileL} {

    font-size:${fontSize.mobileL}px;
  }
  @media ${device.tablet}   {
 
    font-size:${fontSize.tablet}px;
  }
  
  @media ${device.laptop} {

    font-size:${fontSize.laptop}px;
  }
  @media ${device.laptopL} {

    font-size:${fontSize.laptopL};
  }
  @media ${device.desktop} {
 
    font-size:${fontSize.desktop};
  }
  @media ${device.desktopL} {
 
    font-size:${fontSize.desktopL};
  }
`;

export {
    SentenceContainer
  };