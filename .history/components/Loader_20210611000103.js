import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  margin-top: 5rem;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 2rem;
`;

const Loader = () => {
  return <Rotate>&lt; 🏋️ &gt;</Rotate>;
};

export default Loader;
