import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/theme/GlobalStyles";
import Head from "../src/theme/Head";
import theme from "../src/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
