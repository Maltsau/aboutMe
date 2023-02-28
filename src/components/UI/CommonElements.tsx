import styled from "styled-components";

export const TextParagraph = styled.p<{
  bold?: boolean;
  color?: string;
  fontSize?: string;
  tightScreenFont?: string;
  wideScreenFont?: string;
  backgroundColor?: string;
}>`
  color: ${(props) => props.color};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  margin: 0 5px;
  @media (max-width: 450px) {
    font-size: ${(props) => props.tightScreenFont};
  }
  @media (min-width: 900px) {
    font-size: ${(props) => props.wideScreenFont};
  }
`;
