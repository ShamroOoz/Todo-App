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
		margin-top: 20em;
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
  id: "dark",
  todoBg: "#25273D",
  bodyBg: "#171823",
  circleBg:
    "linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  newTodoPlaceholderText: "#767992",
  newTodoTypingText: "#C8CBE7",
  completedTodoText: "#4D5067",
  uncompletedTodoText: "#C8CBE7",
  filterText: "#5B5E7E",
  filterTextHover: "#E3E4F1",
  activeFilterText: "#3A7CFD",
  todoBorder: "1px solid #393A4B",
  circleBorderHover: "1px solid #979797",
  boxShadow: "0 35px 50px -15px rgba(0,0,0,0.5);",
  bgColor: "red",
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
