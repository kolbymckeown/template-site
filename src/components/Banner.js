import React from 'react'
import styled from 'styled-components'
import data from '../data.json'

const Banner = () => {
    return (
        <Wrapper>
            <Img src={data.banner.url} />
        </Wrapper>
    )
}

export default Banner;

const Wrapper = styled.div`
    height: 1000px;
    width: 100vw;
    

`
const Img = styled.img`
    width: 100vw;
    height: 900px;
`;