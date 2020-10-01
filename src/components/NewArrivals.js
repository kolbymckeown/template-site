import React, { useState } from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import data from "../utils/data.json";

const BestSellers = () => {
  const [category1, setCategory1] = useState(true);
  const [category2, setCategory2] = useState(false);

  return (
    <Wrapper>
      <Title>{data.carousel2Details.title}</Title>
      <OptionsNav>
        <A
          style={{ borderBottom: category1 ? "1px solid black" : "unset" }}
          onClick={() => {
            setCategory1(true);
            setCategory2(false);
          }}
        >
          {data.carousel2Details.category1}
        </A>
        <A
          style={{ borderBottom: category2 ? "1px solid black" : "unset" }}
          onClick={() => {
            setCategory2(true);
            setCategory1(false);
          }}
        >
          {data.carousel2Details.category2}
        </A>
      </OptionsNav>

      {category1 && (
        <ItemsCont className="asdasdas">
          {data.itemSet1.map((item) => {
            return (
              <Item>
                <div style={{ position: "relative" }}>
                  <ItemImg src={item.img} />
                  <div
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    <BsHeart />
                  </div>
                </div>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
                <ItemTax>{item.tax}</ItemTax>
              </Item>
            );
          })}
        </ItemsCont>
      )}
      {category2 && (
        <ItemsCont className="aswwdasdas">
          {data.itemSet2.map((item) => {
            return (
              <Item>
                <div style={{ position: "relative" }}>
                  <ItemImg src={item.img} />
                  <div
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    <BsHeart />
                  </div>
                </div>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
                <ItemTax>{item.tax}</ItemTax>
              </Item>
            );
          })}
        </ItemsCont>
      )}
      <Button>{data.carousel2Details.buttonText}</Button>
    </Wrapper>
  );
};

export default BestSellers;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Title = styled.p`
  font-size: 32px;
`;

const OptionsNav = styled.nav`
  margin-top: 45px;
`;

const A = styled.a`
  color: black;
  margin: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const ItemsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  width: 50vw;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const ItemImg = styled.img`
  height: 300px;
`;

const ItemName = styled.p`
  margin: 8px;
`;

const ItemPrice = styled.p``;

const ItemTax = styled.p`
  color: grey;
  margin-top: 5px;
`;

const Button = styled.button`
  color: ghostwhite;
  background: black;
  padding: 10px 20px;
  border: none;
  font-size: 14px;
`;
