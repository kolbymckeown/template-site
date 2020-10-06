import React from 'react'
import styled from 'styled-components'
import amex from '../paymentImgs/american-express.svg'
import jcb from '../paymentImgs/jcb.svg'
import mastercard from '../paymentImgs/mastercard.svg'
import visa from '../paymentImgs/visa_1.svg' 

const Payments = () => {
    return (
        <Wrapper>
            <Logo src={amex} />
            <Logo src={jcb} />
            <Logo src={mastercard} />
            <Logo src={visa} />
        </Wrapper>
    )
}

export default Payments;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Logo = styled.img`
    height: 40px;
    padding-left: 18px;
`;