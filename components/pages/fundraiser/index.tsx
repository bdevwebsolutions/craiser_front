import React from 'react'
import { contractData } from '../../../pages/project/[address]';
import { Details } from './details';
import { Container } from './styles';


export const FundraiserPage: React.FC<{data: contractData}> = ({data}) => {

    console.log(data);

    return (
        <Container>
            <Details data={{...data}}/>
        </Container>
    
    )
}