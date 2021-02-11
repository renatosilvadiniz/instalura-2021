import { createGlobalStyle } from "styled-components";
import normalizeCss from "normalize.css";
// import theme from "../src/theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalizeCss}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
