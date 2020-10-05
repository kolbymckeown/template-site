import React from "react";
import styled from "styled-components";
import FooterImg from "../Footer.png";
import data from "../utils/data.json";

const Footer = () => {
  return (
    <>
    <Wrapper>
      <Img src={data.footer.img} />
    </Wrapper>
    <MobileWrapper>
      <Img src={data.footer.img2} />
    </MobileWrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 500px;
  margin-top: 25px;
  width: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 500px;
  width: 100%;
`;

const MobileWrapper = styled.div`
  @media (min-width: 641px) {
    display: none;
  }
`
