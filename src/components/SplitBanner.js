import React from "react";
import styled from "styled-components";
import data from "../utils/data.json";

const SplitBanner = () => {
  return (
    <Wrapper>
      <Img1 src={data.splitBanner.img1} />
      <Img2 src={data.splitBanner.img2} />
    </Wrapper>
  );
};

export default SplitBanner;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Img1 = styled.img`
  width: 50%;
  margin-right: 5px;
  @media (max-width: 640px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Img2 = styled.img`
  width: 50%;
  margin-left: 5px;
  overflow: hidden;
  @media (max-width: 640px) {
    width: 100%;
    margin-left: 0;
    margin-top: 8px;
  }
`;
