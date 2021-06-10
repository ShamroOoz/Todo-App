import styled from "styled-components";
import Head from "../components/head";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default () => (
  <Wrapper>
    <Head title="Home" />
    <Title>Hello World!</Title>
  </Wrapper>
);
