import React from 'react'
import styled from 'styled-components'
import FooterImg from '../Footer.png'

const Footer = () => {
    return (
        <Wrapper>
            <Img src={FooterImg} />
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    height: 500px;
    width: 100vh;
    margin-top: 25px;
    margin-bottom: 30px;
`;

const Img = styled.img``;