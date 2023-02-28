import styled from "styled-components";

import { TextParagraph } from "../CommonElements";

const Container = styled.div`
  background-color: #6f8af0;
  margin-top: 10px;
`;

const ContentContainer = styled.div`
  background-color: #e6dede;
  text-align: left;
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
      <TextParagraph>{text}</TextParagraph>
      {isOpen ? <ContentContainer>{content}</ContentContainer> : null}
    </Container>
  );
}
