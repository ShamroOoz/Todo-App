import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/head";
const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%; //1rem = 10px
		--font-size-primary: 1.2rem;
		--font-size-secondary: 1.4rem;
		--color-outline: #3A7CFD;
		--outline: 2px dotted var(--color-outline);

	}
	body {
		font-family: 'Josefin Sans', sans-serif;
		width: auto;
		background-color: ${({ theme }) => theme.bodyBg};
		transition: background-color var(--transition);
		overflow-x: hidden;
		margin-top: 7em;
	}
	a,
	button {
		&:focus {
			outline: var(--outline);
		}
	}
	.sr-only {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important;
		-webkit-clip-path: inset(50%) !important;
			clip-path: inset(50%) !important;
		height: 1px !important;
		margin: -1px !important;
		overflow: hidden !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important;
	}
`;

const theme = {
  id: "light",
  todoBg: "#fff",
  bodyBg: "#FAFAFA",
  circleBg:
    "linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  newTodoPlaceholderText: "#9495A5",
  newTodoTypingText: "#393A4B",
  completedTodoText: "#D1D2DA",
  uncompletedTodoText: "#494C6B",
  filterText: "#9495A5",
  filterTextHover: "#494C6B",
  activeFilterText: "#3A7CFD",
  todoBorder: "1px solid #E3E4F1",
  circleBorderHover: "1px solid #707070",
  boxShadow: "0 35px 50px -15px rgba(194,195,214,0.5);",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
