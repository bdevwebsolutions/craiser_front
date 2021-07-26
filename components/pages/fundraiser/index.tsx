import React from 'react'
import { contractData } from '../../../pages/project/[address]';
import { Details } from './details';
import styled from 'styled-components';


export const FundraiserPage: React.FC<{data: contractData}> = ({data}) => {

    console.log(data);

    return (
        <Container>
            <Details data={{...data}}/>
        </Container>
    
    )
}




const Container = styled.div`

    width: 100%;
    max-width: 1200px;
    margin: 0px auto;

`