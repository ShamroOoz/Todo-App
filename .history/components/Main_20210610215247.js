import styled from "styled-components";

const Main = styled.main`
  font-size: var(--font-size-primary);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: -16.5rem;
  }
`;

export default Main;
