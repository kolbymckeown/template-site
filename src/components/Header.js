import React, { useState, useRef } from "react";

import styled from "styled-components";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import data from "../utils/data.json";
import { useWindowSize } from "./helpers";
import MobileHeader from "./MobileHeader"


const Header = () => {
  const { isMobile } = useWindowSize()

  // if (isMobile) {
  //   return (
  //     <>
  //       <MobileHeader />
  //     </>
  //   )
  // }

  return (
    <>
    <MobileDiv>
    <MobileHeader />
    </MobileDiv>
    <Wrapper>
      <Top>
        <p>{data.header.announcement}</p>
      </Top>
      <Middle>
        <Lang>
          <p>{data.header.center.languages}</p>
        </Lang>
        <Logo>
          <Img src={data.header.center.logo} />
        </Logo>
        <Icons>
          <Search>
            <BsSearch style={{ marginRight: "5px" }} />
            <Input type="text" placeholder="Search" />
          </Search>

          <Div>
            <AiOutlineHeart style={{ marginLeft: "5px" }} />
            <BsBag style={{ marginLeft: "5px" }} />
          </Div>
        </Icons>
      </Middle>
      <Bottom>
        <Nav>
          <A href="#">{data.header.categories.option1}</A>
          <A href="#">{data.header.categories.option2}</A>
          <A href="#">{data.header.categories.option3}</A>
          <A href="#">{data.header.categories.option4}</A>
        </Nav>
      </Bottom>
    </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  @media (max-width: 901px) {
    display: none;
  }
`;

const MobileDiv = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;

const Div = styled.div`
  font-size: 22px;
`;

const Icons = styled.div`
  display: flex;
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
  margin-left: 70px;
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
  background: ${data.header.categories.backgroundColor};
  padding: 10px;
`;

const Nav = styled.nav`
  font-size: 14px;
`;

const A = styled.a`
  padding: 28px;
  text-decoration: none;
  color: ${data.header.categories.fontColor};
`;
