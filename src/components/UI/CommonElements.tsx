import styled from "styled-components";

export const TextParagraph = styled.p<{
  bold?: boolean;
  underline?: boolean;
  color?: string;
  padding?: string;
  wideScreenPadding?: string;
  fontSize?: string;
  tightScreenFont?: string;
  wideScreenFont?: string;
  backgroundColor?: string;
}>`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "inherit")};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  margin: 0 5px;
  @media (max-width: 450px) {
    font-size: ${(props) => props.tightScreenFont};
  }
  @media (min-width: 900px) {
    font-size: ${(props) => props.wideScreenFont};
    padding: ${(props) => props.wideScreenPadding};
  }
`;

export const FlexContainer = styled.div<{ cursor?: string; padding?: string }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => props.cursor};
  padding: ${(props) => props.padding};
`;
