import React from "react";
import styled from "styled-components";
import data from "../utils/data.json";
import Payments from './Payments';

const Footer = () => {
  return (
    <>
    <Wrapper>
      <Column1>
      {data.footerLinks1.map((link) => {
        return (
          <p>{link.title}</p>
        )
      })}
      </Column1>
      <Column2>
      {data.footerLinks2.map((link) => {
        return (
          <p>{link.title}</p>
        )
      })}
      </Column2>
      
    </Wrapper>
    <MobileWrapper>
      
    </MobileWrapper>
    <PayWrap>
      <Payments />
</PayWrap>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
display: flex;

line-height: 35px;
padding-left: 10%;
padding-top: 25px;
padding-bottom: 75px;
  margin-top: 25px;
  width: 100%;
  background: #222222;
  color: white;
  
  @media (max-width: 899px) {
    flex-direction: column;

  }
`;

const Column1 = styled.div``;

const Column2 = styled.div`
  margin-left: 15%;
  @media (max-width: 899px) {
    margin-left: unset;
    
  }
`;

const Img = styled.img`
  height: 500px;
  width: 100%;
  @media (max-width: 899px) {
    width: unset;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #222222;
  @media (min-width: 900px) {
    display: none;
  }
`

const PayWrap = styled.div`
  display: flex;
  justify-content: center;
  /* @media (min-width: 900px) {
    display: none;
  } */
`;
