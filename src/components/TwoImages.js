import React from 'react'
import styled from 'styled-components'
import data from '../data.json'

const TwoImages = () => {
    return (
        <Wrapper>
            <Img src={data.twoImages.img1} />
            <Img src={data.twoImages.img2} />
        </Wrapper>
    )
}

export default TwoImages

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
`;

const Img = styled.img`
    flex: 1;
    height: 500px;
    width: 100%;
`;