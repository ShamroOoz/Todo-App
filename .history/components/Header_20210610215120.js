import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 20rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div``;

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
