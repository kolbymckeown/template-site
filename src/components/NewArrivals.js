import React from "react";
import styled from "styled-components";
import { BsHeart } from 'react-icons/bs'

const NewArrivals = () => {
    return (
        <Wrapper>
            <Title>New Arrivals</Title>
            <OptionsNav>
                <A href="#">Men's</A>
                <A href="#">Women's</A>
            </OptionsNav>
            <ItemsCont>
                <Item>
                    <div style={{position: 'relative'}}>
                    <ItemImg src="https://i.localised.com/img/lj/product/f1519650-1e42-4b74-ad0e-3aab6a9883b5.jpg" />
                    <div style={{position: 'absolute', top: '0', right: '0'}}>
                    <BsHeart />
                    </div>
                    </div>
                    <ItemName>LJXII LUGANO LEATHER 40MM</ItemName>
                    <ItemPrice>₩235,000</ItemPrice>
                    <ItemTax>(duty & tax incl.)</ItemTax>
                </Item>
                <Item>
                <div style={{position: 'relative'}}>
                    <ItemImg src="https://i.localised.com/img/lj/product/1b9f1d63-2336-4120-80a4-3cb17e932121.jpg" />
                    <div style={{position: 'absolute', top: '0', right: '0'}}>
                    <BsHeart />
                    </div>
                    </div>
                    <ItemName>LJXII LUGANO MILANESE 40MM</ItemName>
                    <ItemPrice>₩235,000</ItemPrice>
                    <ItemTax>(duty & tax incl.)</ItemTax>
                </Item>
                <Item>
                <div style={{position: 'relative'}}>
                    <ItemImg src="https://i.localised.com/img/lj/product/850da775-8f9f-4f1d-be6e-a88af66b894a.jpg" />
                    <div style={{position: 'absolute', top: '0', right: '0'}}>
                    <BsHeart />
                    </div>
                    </div>
                    <ItemName>RALLY VASA LINK 38MM</ItemName>
                    <ItemPrice>₩313,000</ItemPrice>
                    <ItemTax>(duty & tax incl.)</ItemTax>
                </Item>
                <Item>
                <div style={{position: 'relative'}}>
                    <ItemImg src="https://i.localised.com/img/lj/product/c087bb30-038b-4203-88f1-f89b0f41ee1b.jpg" />
                    <div style={{position: 'absolute', top: '0', right: '0'}}>
                    <BsHeart />
                    </div>
                    </div>
                    <ItemName>Vivid Link 38mm</ItemName>
                    <ItemPrice>₩248,000</ItemPrice>
                    <ItemTax>(duty & tax incl.)</ItemTax>
                </Item>
            </ItemsCont>
            <Button>
                View All
            </Button>
        </Wrapper>
    )
}

export default NewArrivals;

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
`;

const ItemsCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
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

const ItemPrice = styled.p`
`;

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