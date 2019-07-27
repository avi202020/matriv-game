import styled from "styled-components";

const matrivText = styled.h1`
  color: ${props =>
    props.sm
      ? props.theme.colors.foreground.base
      : props.theme.colors.foreground.base};
  font-family: Bangers, sans-serif;
  margin: 0 0 0 ${props => (props.spaceLeft ? ".5em" : "0")};
  text-align: center;
  letter-spacing: 0.4em;
  font-size: ${props => (props.sm ? "1rem" : "2rem")};
  margin-top: 1em !important;
`;

export default matrivText;
