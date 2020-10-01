import React from 'react'
import styled from 'styled-components'
import FooterImg from '../Footer.png'
import data from '../utils/data.json'

const Footer = () => {
    return (
        <Wrapper>
            <Img src={data.footer.img} />
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    height: 500px;
    margin-top: 25px;
`;

const Img = styled.img`
    height: 500px;
    width: 100vw;
`;