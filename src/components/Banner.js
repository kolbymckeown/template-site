import React from 'react'
import styled from 'styled-components'
import data from '../utils/data.json'

const Banner = () => {
    return (
        <Wrapper>
            <Img src={data.banner.url} />
        </Wrapper>
    )
}

export default Banner;

const Wrapper = styled.div`
    width: 100vw;
`
const Img = styled.img`
    width: 100vw;
`;