import React from "react";
import styled from "styled-components";
import data from '../utils/data.json'

const ImageCaption = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <Img src={data.imageCaption.image} />
      </LeftPanel>
      <RightPanel>
        <Title>{data.imageCaption.title}</Title>
        <Caption>
          {data.imageCaption.caption}
        </Caption>
        <Button>{data.imageCaption.buttonText}</Button>
      </RightPanel>
    </Wrapper>
  );
};

export default ImageCaption;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  margin-right: 150px;

`;

const Img = styled.img`
  width: 900px;
  height: auto;
  padding-left: 155px;
`;

const LeftPanel = styled.div``;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  line-height: 2;
`;

const Title = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Caption = styled.p`
  width: 75%;
  font-size: 14px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
  color: black;
  background: ghostwhite;
  border: 1px solid black;
  font-size: 18px;
  padding: 8px 16px;
`;
