import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
