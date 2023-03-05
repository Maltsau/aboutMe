import { useState } from "react";
import styled from "styled-components";
import avatar from "./assets/avatar.png";
import emailIcon from "./assets/email_icon.png";
import gitIcon from "./assets/github-mark.png";
import LinkedInIcon from "./assets/LinkedIn.svg";
import codeWarsIcon from "./assets/codewars.svg";
import "./App.css";

import { TextParagraph } from "./components/UI/CommonElements";
import InfoPart from "./components/InfoPart";

const email = "emeraldwhistler.dm@gmail.com";

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "sidebar sidebar content content content";
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "sidebar content content";
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
  justify-content: center;
`;

const Avatar = styled.img`
  margin: 5px;
  width: 90%;
  border-radius: 10%;
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
  @media (min-width: 1000px) {
    display: none;
  }
`;

const VerticalIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // margin-right: auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Icon = styled.img<{
  size: string;
  tightScreenSize?: string;
  wideScreenSize?: string;
  margin?: string;
}>`
  box-sizing: border-box;
  margin: ${(props) => props.margin};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  @media (max-width: 450px) {
    height: ${(props) => props.tightScreenSize};
    width: ${(props) => props.tightScreenSize};
  }
  @media (min-width: 900px) {
    height: ${(props) => props.wideScreenSize};
    width: ${(props) => props.wideScreenSize};
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px 0 5px;
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
                size="4vw"
                tightScreenSize="50px"
                wideScreenSize="50px"
                src={emailIcon}
                alt="E-Mail"
              />
            </a>
            <a href="https://github.com/Maltsau" target="_blank">
              <Icon
                size="4vw"
                margin="1vw 0"
                tightScreenSize="50px"
                wideScreenSize="50px"
                src={gitIcon}
                alt="GitHub"
              ></Icon>
            </a>
            <a
              href="https://linkedin.com/in/dzmitry-maltsau-58079a251"
              target="_blank"
            >
              <Icon
                size="4vw"
                margin="1vw 0"
                tightScreenSize="50px"
                wideScreenSize="50px"
                src={LinkedInIcon}
                alt="LinkedIn"
              ></Icon>
            </a>
            <a href="https://www.codewars.com/users/Maltsau" target="_blank">
              <Icon
                size="4vw"
                margin="1vw 0"
                tightScreenSize="50px"
                wideScreenSize="50px"
                src={codeWarsIcon}
                alt="codeWarsIcon"
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
            <a href="https://www.codewars.com/users/Maltsau" target="_blank">
              <Icon
                size="4vw"
                margin="1vw 0"
                tightScreenSize="50px"
                wideScreenSize="50px"
                src={codeWarsIcon}
                alt="codeWarsIcon"
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
