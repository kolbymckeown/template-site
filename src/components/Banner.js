import React from "react";
import styled from "styled-components";
import data from "../utils/data.json";

const Banner = () => {
  return (
    <>
    <Wrapper>
      <Img src={data.banner.url} />
    </Wrapper>
    <WrapperMobile>
      <Img src={data.banner.url2} />
    </WrapperMobile>
    </>
  );
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 100%;
`;

const WrapperMobile = styled.div`
  @media (min-width: 641px) {
    display: none;
  }
`;
