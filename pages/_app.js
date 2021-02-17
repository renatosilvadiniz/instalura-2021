import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/theme/GlobalStyles";
import Head from "next/head";
import Font from "../src/theme/Typograph/font";
import theme from "../src/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura</title>
        <Font />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
