import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import Search from "./Search";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10.5px 15px 10.5px 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 17.5px 15px 17.5px 20px;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <Search />
    </StyledHeader>
  );
};

export default Header;
