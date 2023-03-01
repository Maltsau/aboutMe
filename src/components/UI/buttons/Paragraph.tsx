import styled from "styled-components";
import Right from "../../../assets/Right.svg";
import Down from "../../../assets/down.svg";

import { TextParagraph } from "../CommonElements";

const Container = styled.div`
  background-color: #6f8af0;
  margin-top: 5px;
  text-align: left;
`;

const ContentContainer = styled.div`
  background-color: #e6dede;
  font-size: 1.8vw;
  text-align: left;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
`;

const ArrowIcon = styled.img`
  height: 2vw;
  width: 2vw;
  @media (max-width: 450px) {
    height: 16px;
    width: 16px;
  }
  @media (min-width: 900px) {
    height: 20px;
    width: 20px;
  }
`;

export default function Paragraph({
  content,
  text,
  isOpen,
  onClick,
}: {
  content?: JSX.Element;
  text: string;
  isOpen?: boolean;
  onClick: () => void;
}) {
  return (
    <Container onClick={onClick}>
      <FlexContainer>
        <TextParagraph
          bold
          fontSize="2vw"
          tightScreenFont="16px"
          wideScreenFont="20px"
        >
          {text}
        </TextParagraph>
        <ArrowIcon src={isOpen ? Down : Right} />
      </FlexContainer>
      {isOpen ? <ContentContainer>{content}</ContentContainer> : null}
    </Container>
  );
}
