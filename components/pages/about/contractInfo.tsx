import React from 'react'

//STYLING
import styled from 'styled-components';
import { H2, H3, TextContainer, TitleContainer } from '../../global/markup';

const ContractInfo = () => {
    return (
    <TextContainer>
        <TitleContainer>
            <h1>CRAISER_.</h1>
            <H2>SMART CONTRACT</H2>
        </TitleContainer>
        <Description>
            <H3>HOW DOES OUR CONTRACT WORK</H3>     
        </Description>
    </TextContainer>
    )
}

const Description = styled.div`

`

export default ContractInfo;