import React from "react";
import styled from "styled-components";
import data from '../utils/data.json'

const ImageCaption2 = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <Img src={data.imageCaption2.leftPanelImg} />
      </LeftPanel>
      <RightPanel>
        <P1>
          {data.imageCaption2.rightPanelInfo.p1}
        </P1>
        <P2>
          {data.imageCaption2.rightPanelInfo.p2}
        </P2>
      </RightPanel>
    </Wrapper>
  );
};

export default ImageCaption2;

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
    width: 100%;
    margin-top: 15px;
    /* margin-left: 90px; */
    margin-bottom: 100px;
    @media (max-width: 1100px) {
      display: flex;
    flex-direction: column;
    margin-right: 0px;
    margin-top: 35px;
    margin-left: unset;
    justify-content: center;
  }
`;

const LeftPanel = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;

`;

const Img = styled.img`
    width: 500px;
    width: 90%;
    margin-left: 150px;
    @media (max-width: 1100px) {
    width: 90vw;
    margin-left: 20px;
    max-width: 475px;
  }
`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-right: 150px;
    line-height: 2;
    @media (max-width: 1100px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const P1 = styled.p`
    margin-bottom: 12px;
    font-size: 14px;
    width: 60%;
    @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const P2 = styled.p`
    width: 60%;
    font-size: 14px;
    @media (max-width: 768px) {
    font-size: 10px;
  }
`;
