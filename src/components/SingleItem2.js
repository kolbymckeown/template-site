import React from "react";
import styled from "styled-components";
import data from '../data.json'

const SingleItem2 = () => {
  return (
    <Wrapper>
      <LeftPannel>
        <Img src={data.singleItem2.leftPanelImg} />
      </LeftPannel>
      <RightPannel>
        <P1>
          {data.singleItem2.rightPanelInfo.p1}
        </P1>
        <P2>
          {data.singleItem2.rightPanelInfo.p2}
        </P2>
      </RightPannel>
    </Wrapper>
  );
};

export default SingleItem2;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-left: 90px;

`;

const LeftPannel = styled.div`
width: 40%;
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
    width: 60%;
    margin-right: 150px;
    line-height: 2;
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
