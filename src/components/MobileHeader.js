import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import data from "../utils/data.json";
import { useOnClickOutside } from "../hooks";
import { Burger, Menu } from "./mobileMenu";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Wrapper>
      <Top>
        <p>{data.header.announcement}</p>
      </Top>
      <Middle>
        <BurgerMenu ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </BurgerMenu>
        <Logo>
          <BsSearch style={{ marginRight: "15px" }} />
          <Img src={data.header.center.logo} />
        </Logo>
        <Icons>
          <AiOutlineHeart style={{ marginLeft: "5px" }} />
          <BsBag style={{ marginLeft: "15px" }} />
        </Icons>
      </Middle>
    </Wrapper>
  );
};

export default MobileHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 12px;
  width: 100%;
  height: 50px;
`;

const Middle = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 22px;
`;

const BurgerMenu = styled.div`
    margin-right: 15px;
`;

const Logo = styled.div``;

const Img = styled.img`
  height: 25px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
