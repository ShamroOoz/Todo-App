import styled from "styled-components";
import Head from "../components/head";

const Title = styled.h1`
  border: 1px solid red;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Title>Hello World!</Title>
    </>
  );
}
