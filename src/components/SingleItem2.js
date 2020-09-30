import React from "react";
import styled from "styled-components";

const SingleItem2 = () => {
  return (
    <Wrapper>
      <LeftPannel>
        <Img src="https://kr.larssonjennings.com/images/home/about/about-us.jpg" />
      </LeftPannel>
      <RightPannel>
        <P1>
          At Larsson & Jennings we see things differently. Inspired by our
          London - Stockholm origins, we reimagine both modern and classic
          design bringing art and precision to watches you’ll wear every day.
        </P1>
        <P2>
          Larsson & Jennings’ watches are designed in house, partnering with
          trusted manufacturers to ensure quality is at the heart of every
          product. We use only hand-finished materials to deliver premium
          detailing and durability.
        </P2>
      </RightPannel>
    </Wrapper>
  );
};

export default SingleItem2;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 100px;
`;

const LeftPannel = styled.div`
width: 50%;
`;

const Img = styled.img`
    width: 700px;
    margin-left: 150px;

`;

const RightPannel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 50%;
    margin-right: 150px;
`;

const P1 = styled.p`
    margin-bottom: 12px;
    font-size: 14px;
    width: 60%;
`;

const P2 = styled.p`
    width: 60%;
    font-size: 14px;

`;
