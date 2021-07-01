import React from 'react'
import { userObject } from '../../../../../../context/global/userContext'
import { Container } from './styles';

const FundingContent: React.FC<{data: userObject}> = ({data}) => {
    return <Container></Container>
}

export default FundingContent;