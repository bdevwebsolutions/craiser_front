import React from 'react'
import { contractData } from '../../../pages/project/[address]'
import { TextContainer, Paragraph, H3, H4, TitleContainer } from '../../global/markup'

//TODO FUNDED AND DEADLINE FROM CONTRACT INTERACTION


export const Details: React.FC<{data: contractData}> = ({data}) => {
    return (
        <TextContainer>
            <TitleContainer>
                <H3>Fundraiser Details</H3>
            </TitleContainer>
            <Paragraph>
                <div>
                    <H4>Name</H4>
                    <p>{data && data.title}</p>
                </div>
                <div>
                    <H4>Organization</H4>
                    <p>{data && data.organization}</p>
                </div>
                <div>
                    <H4>Description</H4>
                    <p>{data && data.description}</p>
                </div>
                <div>
                    <H4>Goal</H4>
                    <p>{data && data.goal} ETH</p>
                </div>
                <div>
                    <H4>Funded</H4>
                    <p>{data && data.donated} ETH</p>
                </div>
                <div>
                    <H4>Deadline</H4>
                    <p>153184 seconds</p>
                </div>
            </Paragraph>
        </TextContainer>
    )
}