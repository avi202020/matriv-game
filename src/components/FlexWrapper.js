import { backgroundImages } from "polished";
import styled from "styled-components";
import ComicLines from "./comic-lines.svg";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  ${props =>
    backgroundImages(
      `url(${ComicLines}), radial-gradient(${
        props.theme.colors.primary.base
      } 0%,${props.theme.colors.primary.base} 80%)`
    )};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default FlexWrapper;
