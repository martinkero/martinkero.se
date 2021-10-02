import React from "react";
import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Divider } from "./components/Divider";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "./fonts/fonts";

const theme = {
  colors: {
    blue: "#2d3748",
    blueLight: "#3c4960",
    gray: "#cbd5e0",
  },
  font: "Open Sans",
  fontSize: {
    small: "1rem",
    medium: "1.25rem",
    large: "2rem",
  },
};

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-family: "Open Sans";
    font-size: ${({ theme }) => theme.fontSize.small};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  a {
    text-decoration: none;
  }
`;
const Cards = styled.div`
  max-width: 31rem;
  margin: 8rem auto 0;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  a {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <Cards>
          <Card
            header="Martin Kero"
            content="Autodidact developer currently located in northern Sweden"
            footer={
              <>
                <Link href="https://www.linkedin.com/in/martin-kero-63308950" text="LinkedIn" />
                <Link href="https://github.com/martinkero" text="GitHub" />
              </>
            }
            headerFontSize={theme.fontSize.large}
          />
          <Divider text="Today" />
          <Card
            header="Nordic Peak"
            content={
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>OpenHierarchy</li>
                <li>MySQL</li>
              </ul>
            }
          />
          <Divider text="2018" />
          <Card
            header="ClearIT"
            content={
              <ul>
                <li>Linux sysadmin</li>
                <li>Asterisk / SIP</li>
                <li>Support</li>
                <li>Java</li>
                <li>Golang</li>
                <li>JasperReports</li>
                <li>OracleSQL / PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            }
          />
          <Divider text="2014" />
        </Cards>
        <Footer>
          <Link href="https://travis-ci.org/github/martinkero/martinkero.se" text="Travis CI" />
        </Footer>
      </ThemeProvider>
    </>
  );
};

export default App;
