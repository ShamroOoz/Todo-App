import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 20rem;
  padding: 2.4rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(p) => p.theme.bodyBg};
  display: flex;
  justify-content: center;
  transition: background-image var(--transition);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  max-width: 54rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 1.1rem;
`;

const Header = () => {
  return <h1>TODO</h1>;
};

export default Header;