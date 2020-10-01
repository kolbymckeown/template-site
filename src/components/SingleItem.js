import React from "react";
import styled from "styled-components";
import data from '../data.json'

const SingleItem = () => {
  return (
    <Wrapper>
      <LeftPannel>
        <ItemImg src={data.singleItem.itemImg} />
      </LeftPannel>
      <RightPannel>
        <Title>{data.singleItem.title}</Title>
        <ItemDesc>
          {data.singleItem.itemDesc}
        </ItemDesc>
        <Button>{data.singleItem.buttonText}</Button>
      </RightPannel>
    </Wrapper>
  );
};

export default SingleItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  margin-right: 150px;

`;

const ItemImg = styled.img`
  width: 900px;
  height: auto;
  padding-left: 155px;
`;

const LeftPannel = styled.div``;

const RightPannel = styled.div`
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

const ItemDesc = styled.p`
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
