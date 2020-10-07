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
  /* display: flex;
  flex-direction: row;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  margin-top: 50px;
  /* margin-right: 150px; */
  width: 100%;
  @media (max-width: 976px) {
    display: flex;
    flex-direction: column;
    margin-right: 0px;
    margin-top: 35px;
    justify-content: center;
  }

`;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding-left: 155px;
  @media (max-width: 976px) {
    width: 90vw;
    max-width: 500px;
    padding-left: 0;
  }
`;

const LeftPanel = styled.div`
  @media (max-width: 976px) {
    display: flex;
    justify-content: center;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
  @media (max-width: 976px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
  @media (max-width: 976px) {
    font-size: 22px;
    text-align: center;
    margin-top: 25px;
  }
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
  @media (max-width: 976px) {
    padding: 6px 12px;
    font-size: 15px;
  }
`;
