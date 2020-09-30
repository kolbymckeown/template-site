import React from "react";
import styled from "styled-components";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import CompanyLogo from '../Logo.png'

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <p>Free Standard Shipping on Orders Over ₩80'000</p>
      </Top>
      <Middle>
        <Lang>
          <p>한국어 / English</p>
        </Lang>
        <Logo>
          <img src={CompanyLogo} />
        </Logo>
        <Search>
          <BsSearch />
          <Input type="text" placeholder="Search" />

          <AiOutlineHeart />
          <BsBag />
        </Search>
      </Middle>
      <Bottom>
        <Nav>
            <A href="#">MENS</A>
            <A href="#">WOMENS</A>
            <A href="#">WATCHES</A>
            <A href="#">ACCESSORIES</A>
        </Nav>
      </Bottom>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
    
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background: black;
  color: ghostwhite;
  padding: 18px;
  font-size: 14px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 30px;
  align-items: center;
`;

const Lang = styled.div`
    font-size: 12px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
    margin-left: 130px;
`;

const Search = styled.div`
    border-bottom: 1px solid black;
    font-size: 20px;
`;

const Input = styled.input`
  border: none;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #add7c9;
    padding: 10px;
`;

const Nav = styled.nav`
    font-size: 14px;
`;

const A = styled.a`
    padding: 28px;
    text-decoration: none;
    color: black;
`;
