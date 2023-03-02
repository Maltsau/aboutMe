import { useState } from "react";
import styled from "styled-components";

import Paragraph from "./UI/buttons/Paragraph";
import { TextParagraph } from "./UI/CommonElements";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  background-color: #e6dede;
`;

export default function InfoPart() {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isTechStackVisible, setIsTechStackVisible] = useState(false);
  const [isLangugesVisible, setIsLangugesVisible] = useState(false);
  const [isParticipationsVisible, setIsParticipationsVisible] = useState(false);
  return (
    <ContentContainer>
      <Paragraph
        text="Experience"
        isOpen={isExperienceVisible}
        onClick={() => setIsExperienceVisible(!isExperienceVisible)}
        content={
          <>
            <TextParagraph bold padding="5px 0 0 0">
              Design engineer (constructor)
            </TextParagraph>
            <TextParagraph padding="0 10px">
              oct. 2005 – oct. 2007
            </TextParagraph>
            <TextParagraph color="gray" padding="0 10px">
              “Gomel Plant “Communalnik”, Gomel
            </TextParagraph>
            <TextParagraph color="gray" padding="0 10px">
              Development of design and technological documentation (AutoCAD)
            </TextParagraph>
            <TextParagraph bold padding="5px 0 0 0">
              Well survey engineer, lead engineer, head of geophysical party
            </TextParagraph>
            <TextParagraph padding="0 10px">
              oct. 2007 – nov. 2022
            </TextParagraph>
            <TextParagraph color="gray" padding="0 10px">
              “Production Association “Belorusneft”, Department of Field
              Geophysical Research, Rechitsa
            </TextParagraph>
            <TextParagraph color="gray" padding="0 10px">
              Flow measurement studies, gas logging, production department
              management
            </TextParagraph>
          </>
        }
      ></Paragraph>
      <Paragraph
        text="Education"
        isOpen={isEducationVisible}
        onClick={() => setIsEducationVisible(!isEducationVisible)}
        content={
          <>
            <TextParagraph bold underline padding="5px 0 0 0">
              Higher education
            </TextParagraph>
            <TextParagraph bold>Gomel State Technical University</TextParagraph>
            <TextParagraph padding="0 10px">jun. 2005</TextParagraph>
            <TextParagraph padding="0 10px" color="gray">
              Qualification – mining engineer
            </TextParagraph>
            <TextParagraph padding="0 10px" color="gray">
              Spatiality – development and operation of oil and gas fields
            </TextParagraph>
            <TextParagraph bold underline padding="5px 0 0 0">
              Additional education
            </TextParagraph>
            <TextParagraph bold>
              JavaScript course, White Lynx Center, Gomel
            </TextParagraph>
            <TextParagraph padding="0 10px">aug. 2021</TextParagraph>
          </>
        }
      ></Paragraph>
      <Paragraph
        text="Tech Stack"
        isOpen={isTechStackVisible}
        onClick={() => setIsTechStackVisible(!isTechStackVisible)}
        content={
          <>
            <TextParagraph padding="5px 0 5px 10px">
              JavaScript, TypeScript, HTML, CSS, ReactJS, Next.js, Zustand,
              Styled-Components, ReactQuery
            </TextParagraph>
          </>
        }
      ></Paragraph>
      <Paragraph
        text="Languges"
        isOpen={isLangugesVisible}
        onClick={() => setIsLangugesVisible(!isLangugesVisible)}
        content={
          <>
            <TextParagraph padding="5px 0 0 10px">
              Russian – native
            </TextParagraph>
            <TextParagraph padding="0 10px">Belarusian – fluent</TextParagraph>
            <TextParagraph padding="0 10px">
              English - intermediate
            </TextParagraph>
          </>
        }
      ></Paragraph>
      <Paragraph
        text="Participations"
        isOpen={isParticipationsVisible}
        onClick={() => setIsParticipationsVisible(!isParticipationsVisible)}
        content={
          <>
            <TextParagraph padding="10px 10px">
              <a href="https://www.clookva.com" target="_blank">
                https://www.clookva.com
              </a>
            </TextParagraph>
          </>
        }
      ></Paragraph>
    </ContentContainer>
  );
}
