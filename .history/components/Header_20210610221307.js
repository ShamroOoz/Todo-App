import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 4rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  max-width: 54rem;
  margin-top: 1.5rem;
`;

const Heading = styled.h1`
  color: #000;
  text-transform: uppercase;
  font-size: 2.6rem;
  font-weight: 700;
  text-align: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Heading>Create Todo</Heading>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
