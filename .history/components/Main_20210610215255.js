import styled from "styled-components";

const Main = styled.main`
  font-size: var(--font-size-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: -16.5rem;
  }
`;

export default Main;
