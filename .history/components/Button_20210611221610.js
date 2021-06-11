import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: inline-flex;
  width: 1.18rem;
  min-width: 1.18rem;
  height: 1.18rem;
  margin-left: 0.8rem;
  transition: transform var(--transition);
  @media (min-width: 768px) {
    width: 1.77rem;
    height: 1.77rem;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export default Button;
