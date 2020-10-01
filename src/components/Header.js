import React from "react";
import styled from "styled-components";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import data from '../data.json'

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <p>{data.header.top}</p>
      </Top>
      <Middle>
        <Lang>
        <p>{data.header.middle.languages}</p>
        </Lang>
        <Logo>
          <Img src={data.header.middle.logo} />
        </Logo>
        <div style={{display: 'flex'}}>
        <Search>
          <BsSearch style={{marginRight: '5px'}} />
          <Input type="text" placeholder="Search" />
        </Search>

        <Div>
          <AiOutlineHeart />
          <BsBag style={{marginLeft: '8px'}}/>
        </Div>
        </div>
      </Middle>
      <Bottom>
        <Nav>
            <A href="#">{data.header.bottom.option1}</A>
            <A href="#">{data.header.bottom.option2}</A>
            <A href="#">{data.header.bottom.option3}</A>
            <A href="#">{data.header.bottom.option4}</A>
        </Nav>
      </Bottom>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
    
`;

const Div = styled.div`
  font-size: 22px;
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

const Img = styled.img`
  height: 40px;
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
    position: relative;
`;

const Input = styled.input`
  border: none;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${data.header.bottom.color};
    padding: 10px;
`;

const Nav = styled.nav`
    font-size: 14px;
`;

const A = styled.a`
    padding: 28px;
    text-decoration: none;
    color: ${data.header.bottom.fontColor};
`;
