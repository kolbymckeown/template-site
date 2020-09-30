import React from 'react'
import styled from 'styled-components'

const TwoImages = () => {
    return (
        <Wrapper>
            <Img src="https://kr.larssonjennings.com/images/home/featured/pb1-en.jpg" />
            <Img src="https://kr.larssonjennings.com/images/home/featured/pb2-en.jpg" />
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
    width: 100%;
`;