import styled from "styled-components";
import Head from "../components/head";

const Title = styled.h1`
  font-size: 50px;
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
