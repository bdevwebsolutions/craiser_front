import React from 'react'
import { ContractDetails } from '../../../../../../../../../lib/contract/fundraising/getFundraiserContract'
import { ContractInfo } from '../details'
import { Approval, Contributers, Description, Funds, Notice, Time } from '../styles'


export const FundsBlock: React.FC<{details: ContractDetails}> = ({details}) => {
    return (
        <Funds>
            <h3>FUNDS</h3>
            <h4>Goal</h4>
            <p>{details && details.GOAL} ETH</p>
            <h4>Collected</h4>
            <p>{details && details.AMOUNT_RAISED} ETH</p>
            <h4>Progress</h4>
            <p>{details && details.PROGRESS}%</p>
        </Funds>
    )
}

export const ContributersBlock: React.FC<{details: ContractDetails}> = ({details}) => {
    return (
        <Contributers>
            <h3>CONTRIBUTERS</h3>
            <h4>Amount of contributers</h4>
            <p>{details && details.TOTAL_CONTRIBUTORS}</p>
            <h4>Average contribution</h4>
            <p>{details && details.AVERAGE_CONTRIBUTION} ETH</p>
        </Contributers>
    )
}

export const TimeBlock: React.FC<{details: ContractDetails}> = ({details}) => {
    return (
        <Time>
            <h3>TIME</h3>
            <h4>Time left</h4>
            <p>20days FILLER</p>
            <Notice>This is calculated based on current blocktime, time can differ based on the network.</Notice>
        </Time>
    )
}

export const ApprovalBlock: React.FC<{details: ContractDetails}> = ({details}) => {
    return (
        <Approval>
            <h3>SPENDING REQUESTS</h3>
            <h4>Open request</h4>
            <p>€200,000 for server maintenance</p>
            <h5>Votes</h5>
            <p>45% confirmation out of 800 contributers</p>
        </Approval>
    )
}

export const DescriptionBlock: React.FC<{details: ContractDetails, active: string, info: ContractInfo}> = ({details, active, info}) => {
    return (
        <Description>
            <h3>DETAILS</h3>
            <h4>ADDRESS</h4>
            <p>{active}</p>
            <h4>Organization</h4>
            <p>{info && info.organization}</p>
            <h4>Description</h4>
            <p>{info && info.description}</p>
        </Description>
    )
}