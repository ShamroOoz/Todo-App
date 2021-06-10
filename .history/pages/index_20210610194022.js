import styled from "styled-components";
import Head from "../components/head";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Title>heloo</Title>
    </>
  );
}
