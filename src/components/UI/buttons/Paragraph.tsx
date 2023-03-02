import { useRef, useEffect } from "react";
import styled from "styled-components";
import autoAnimate from "@formkit/auto-animate";

import Right from "../../../assets/Right.svg";
import Down from "../../../assets/down.svg";

import { TextParagraph, FlexContainer } from "../CommonElements";

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
  @media (min-width: 900px) {
    font-size: 18px;
  }
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
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Container ref={parent} onClick={onClick}>
      <FlexContainer padding="5px" cursor="pointer">
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
