import { useState } from "react";
import styled from "styled-components";
import avatar from "./assets/avatar.png";
import emailIcon from "./assets/email_icon.png";
import gitIcon from "./assets/github-mark.png";
import "./App.css";

const email = "emeraldwhistler.dm@gmail.com";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "sidebar content content";
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

const AvatarContainer = styled.div`
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
`;

const Span = styled.span<{
  bold?: boolean;
  fontSize?: string;
  tightScreenFont?: string;
  wideScreenFont?: string;
}>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: ${(props) => props.fontSize};
  margin: 0 5px;
  @media (max-width: 450px) {
    font-size: ${(props) => props.tightScreenFont};
  }
  @media (min-width: 900px) {
    font-size: ${(props) => props.wideScreenFont};
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`;

const Icon = styled.img<{ size: string; tightScreenSize?: string }>`
  heigth: ${(props) => props.size};
  width: ${(props) => props.size};
  margin: 0 3vw;
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
  grid-area: content;
  background-color: #e6dede;
`;

function App() {
  return (
    <Wrapper>
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar"></Avatar>
        <Span bold fontSize="3vw" tightScreenFont="20px" wideScreenFont="25px">
          Dzmitry Maltsau
        </Span>
        <Span fontSize="2.5vw" tightScreenFont="16px" wideScreenFont="20px">
          JavaScript Trainee
        </Span>
        <ContactsContainer>
          <Span fontSize="2vw" tightScreenFont="14px" wideScreenFont="18px">
            Birth date: 28.04.1983
          </Span>
          <Span fontSize="2vw" tightScreenFont="14px" wideScreenFont="18px">
            City of residence: Gomel, Belarus
          </Span>
          <Span fontSize="2vw" tightScreenFont="14px" wideScreenFont="18px">
            Phone: +375447617586
          </Span>
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
          </IconsContainer>
        </ContactsContainer>
      </AvatarContainer>
      <ContentContainer>CONTENT</ContentContainer>
    </Wrapper>
  );
}

export default App;
