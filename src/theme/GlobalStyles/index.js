import { createGlobalStyle } from 'styled-components';
import normalizeCss from 'normalize.css';

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
  /* default cursor */
  a, button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
