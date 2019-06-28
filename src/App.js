import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 250px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;
const AppHeader = styled.div`
  background-color: #222;
  height: 300px;
  padding: 20px;
  color: white;
`;
const AppTitle = styled.h1`
  font-size: 1.3em;
  font-weight: 900;
`;
const AppIntro = styled.p`
  font-size: large;
`;

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
      </AppHeader>
      <AppTitle>Welcome to react</AppTitle>
      <AppIntro>Testing styled components!</AppIntro>
      <AppTitle> Components are Great!</AppTitle>
    </AppWrapper>
  );
}

export default App;
