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
  margin: auto;
  height: 90%;
  width: 90%;
  // @media (max-width: 670px) {
  //   height: 200px;
  //   width: 200px;
  // }
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
            <a href="https://github.com/Maltsau">
              <Icon
                size="5vw"
                tightScreenSize="50px"
                src={gitIcon}
                alt="GitHub"
              ></Icon>
            </a>
            <a href="linkedin.com/in/dzmitry-maltsau-58079a251">
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
              <TextParagraph bold>Design engineer (constructor)</TextParagraph>
              <TextParagraph>oct. 2005 – oct. 2007</TextParagraph>
              <TextParagraph color="gray">
                “Gomel Plant “Communalnik”, Gomel
              </TextParagraph>
              <TextParagraph color="gray">
                Development of design and technological documentation (AutoCAD)
              </TextParagraph>
              <TextParagraph bold>
                Well survey engineer, lead engineer, head of geophysical party
              </TextParagraph>
              <TextParagraph>oct. 2007 – nov. 2022</TextParagraph>
              <TextParagraph color="gray">
                “Production Association “Belorusneft”, Department of Field
                Geophysical Research, Rechitsa
              </TextParagraph>
              <TextParagraph color="gray">
                Flow measurement studies, gas logging, production department
                management
              </TextParagraph>
            </>
          }
        ></Paragraph>
        <Paragraph
          text="Education"
          isOpen={isEducationVisible}
          onClick={() => !isEducationVisible}
        ></Paragraph>
        <Paragraph
          text="Tech Stack"
          isOpen={isTechStackVisible}
          onClick={() => !isTechStackVisible}
        ></Paragraph>
        <Paragraph
          text="Languges"
          isOpen={isLangugesVisible}
          onClick={() => !isLangugesVisible}
        ></Paragraph>
        <Paragraph
          text="Participations"
          isOpen={isParticipationsVisible}
          onClick={() => !isParticipationsVisible}
        ></Paragraph>
      </ContentContainer>
    </Wrapper>
  );
}

export default App;
