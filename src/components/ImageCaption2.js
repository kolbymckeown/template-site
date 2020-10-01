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
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-left: 90px;
    margin-bottom: 100px;

`;

const LeftPanel = styled.div`
`;

const Img = styled.img`
    width: 500px;
    margin-left: 150px;

`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 75%;
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
