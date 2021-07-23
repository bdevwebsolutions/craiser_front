import React from 'react'
import { contractData } from '../../../../pages/project/[address]'
import { Container, DetailsContainer } from './styles'

//TODO FUNDED AND DEADLINE FROM CONTRACT INTERACTION


export const Details: React.FC<{data: contractData}> = ({data}) => {
    return (
        <Container>
            <h3>Fundraiser Details</h3>
            <DetailsContainer>
                <div>
                    <h4>Name</h4>
                    <p>{data && data.title}</p>
                </div>
                <div>
                    <h4>Organization</h4>
                    <p>{data && data.organization}</p>
                </div>
                <div>
                    <h4>Description</h4>
                    <p>{data && data.description}</p>
                </div>
                <div>
                    <h4>Goal</h4>
                    <p>{data && data.goal} ETH</p>
                </div>
                <div>
                    <h4>Funded</h4>
                    <p>{data && data.donated} ETH</p>
                </div>
                <div>
                    <h4>Deadline</h4>
                    <p>153184 seconds</p>
                </div>
            </DetailsContainer>
        </Container>
    )
}