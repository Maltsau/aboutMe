import { useState } from "react";
import styled from "styled-components";
import avatar from "./assets/avatar.png";
import emailIcon from "./assets/email_icon.png";
import gitIcon from "./assets/github-mark.png";
import LinkedInIcon from "./assets/LinkedIn.svg";
import "./App.css";

import Paragraph from "./components/UI/buttons/Paragraph";
import { TextParagraph } from "./components/UI/CommonElements";
import InfoPart from "./components/InfoPart";

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

const ContactsAvatarContainer = styled.div`
  min-width: 36vw;
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: azure;
  padding-top: 10px;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Avatar = styled.img`
  margin: 5px auto;
  width: 90%;
  @media (max-width: 450px) {
    border-radius: 50%;
  }
  @media (min-width: 900px) {
    width: 300px;
  }
`;

const HorisontalIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  @media (min-width: 900px) {
    display: none;
  }
`;

const VerticalIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: auto;
  @media (max-width: 900px) {
    display: none;
  }
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

const SectorIcon = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 100px 100px 0 0;
  border-top: 5px solid red;
  border-left: 5px solid red;
  border-right: 5px solid red;
`;

function App() {
  return (
    <Wrapper>
      <ContactsAvatarContainer>
        <AvatarContainer>
          <Avatar src={avatar} alt="avatar"></Avatar>
          <VerticalIconsContainer>
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
          </VerticalIconsContainer>
        </AvatarContainer>
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
          <HorisontalIconsContainer>
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
          </HorisontalIconsContainer>
        </ContactsContainer>
      </ContactsAvatarContainer>
      <InfoPart />
    </Wrapper>
  );
}

export default App;
