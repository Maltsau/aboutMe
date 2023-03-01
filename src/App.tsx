import { useState } from "react";
import styled from "styled-components";
import avatar from "./assets/avatar.png";
import emailIcon from "./assets/email_icon.png";
import gitIcon from "./assets/github-mark.png";
import LinkedInIcon from "./assets/LinkedIn.svg";
import "./App.css";

import Paragraph from "./components/UI/buttons/Paragraph";
import { TextParagraph } from "./components/UI/CommonElements";

const email = "emeraldwhistler.dm@gmail.com";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "sidebar sidebar content content content";
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

const AvatarContainer = styled.div`
  min-width: 36vw;
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: azure;
  padding-top: 10px;
`;

const Avatar = styled.img`
  margin: 1vw auto;
  width: 90%;
  @media (max-width: 450px) {
    border-radius: 50%;
  }
`;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
`;

const Icon = styled.img<{ size: string; tightScreenSize?: string }>`
  box-sizing: border-box;
  heigth: ${(props) => props.size};
  width: ${(props) => props.size};
  @media (max-width: 450px) {
    height: ${(props) => props.tightScreenSize};
    width: ${(props) => props.tightScreenSize};
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px 0 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  background-color: #e6dede;
`;

const SectorIcon = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 100px 100px 0 0;
  border-top: 5px solid red;
  border-left: 5px solid red;
  border-right: 5px solid red;
`;

function App() {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isTechStackVisible, setIsTechStackVisible] = useState(false);
  const [isLangugesVisible, setIsLangugesVisible] = useState(false);
  const [isParticipationsVisible, setIsParticipationsVisible] = useState(false);
  return (
    <Wrapper>
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar"></Avatar>
        <TextParagraph
          bold
          fontSize="3vw"
          tightScreenFont="20px"
          wideScreenFont="25px"
        >
          Dzmitry Maltsau
        </TextParagraph>
        <TextParagraph
          fontSize="2.5vw"
          tightScreenFont="16px"
          wideScreenFont="20px"
        >
          JavaScript Trainee
        </TextParagraph>
        <ContactsContainer>
          <TextParagraph
            fontSize="2vw"
            tightScreenFont="14px"
            wideScreenFont="18px"
          >
            Birth date: 28.04.1983
          </TextParagraph>
          <TextParagraph
            fontSize="2vw"
            tightScreenFont="14px"
            wideScreenFont="18px"
          >
            City of residence: Gomel, Belarus
          </TextParagraph>
          <TextParagraph
            fontSize="2vw"
            tightScreenFont="14px"
            wideScreenFont="18px"
          >
            Phone: +375447617586
          </TextParagraph>
          <IconsContainer>
            <a href={`mailto:${email}`}>
              <Icon
                size="5vw"
                tightScreenSize="50px"
                src={emailIcon}
                alt="E-Mail"
              />
            </a>
            <a href="https://github.com/Maltsau" target="_blank">
              <Icon
                size="5vw"
                tightScreenSize="50px"
                src={gitIcon}
                alt="GitHub"
              ></Icon>
            </a>
            <a
              href="https://linkedin.com/in/dzmitry-maltsau-58079a251"
              target="_blank"
            >
              <Icon
                size="5vw"
                tightScreenSize="50px"
                src={LinkedInIcon}
                alt="LinkedIn"
              ></Icon>
            </a>
          </IconsContainer>
        </ContactsContainer>
      </AvatarContainer>
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
              <TextParagraph bold>
                Gomel State Technical University
              </TextParagraph>
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
              <TextParagraph padding="0 10px">
                Belarusian – fluent
              </TextParagraph>
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
    </Wrapper>
  );
}

export default App;
