import React from 'react'
import {Approval, Contributers, DetailsContainer, Funds, Description, Time, Center} from './styles';

// TODO GET CORRECT DATA FROM SMART CONTRACT

export const Details: React.FC<{active: string}> = ({active}) => {


    if(active === ""){
        return <Center>NO PROJECT SELECTED</Center>
    }
    return (
    <DetailsContainer>
        <Funds>
            <h3>FUNDS</h3>
            <h4>Goal</h4>
            <p>€1,000,000 - 500 ETH </p>
            <h4>Collected</h4>
            <p>€253,555 - 251 ETH</p>
            <h4>Progress</h4>
            <p>25.35%</p>
        </Funds>
        <Contributers>
            <h3>CONTRIBUTERS</h3>
            <h4>Amount of contributers</h4>
            <p>2000</p>
            <h4>Average contribution</h4>
            <p>€1265 - 0.5 ETH</p>
        </Contributers>
        <Time>
            <h3>TIME</h3>
            <h4>Date of closing</h4>
            <p>31/10/2022</p>
            <h4>Time left</h4>
            <p>180 days 23 hours 16 minutes</p>
        </Time>
        <Approval>
            <h3>APPROVAL OF WITHDRAWAL</h3>
            <h4>Open approval</h4>
            <p>€200,000 for server maintenance</p>
            <h5>Votes</h5>
            <p>45% confirmation out of 800 contributers</p>
        </Approval>
        <Description>
            <h3>DETAILS</h3>
            <h4>ADDRESS</h4>
            <p>{active}</p>
            <h4>Team</h4>
            <p>Craiser_.</p>
            <h4>Fundraiser description</h4>
            <p>Initial fundraiser to fund the development of the craiser dapp. This includes the maintenance of the dapp and it's smart contracts.</p>
        </Description>
    </DetailsContainer>
    )
}