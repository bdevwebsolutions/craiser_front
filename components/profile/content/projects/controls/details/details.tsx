import React from 'react'
import { ProviderContext } from '../../../../../../context/providerContext';
import { ContractDetails, getContractDetails } from '../../../../../../lib/contract/contractInteraction';
import { LoadingPopup } from './popup';
import {Approval, Contributers, DetailsContainer, Funds, Description, Time, Center, Notice} from './styles';

// TODO WHITDRAWAL FUNCTION & TIME CALCULATION

/** 
--- DETAILS OF SMART CONTRACT DEPLOYED BY CURENT USER-----------------------

    @param: selected => Public key of selected smart contract

-------------------------------------------------------------------
*/

type ContractInfo  = {
    contractAddress: string,
    description: string,
    organization: string,
    title: string,
    upvotes: number,
    __v: number,
    _id:  string,
}

export const Details: React.FC<{active: string}> = ({active}) => {

    const {provider} = React.useContext(ProviderContext);

    const [details, setDetails] = React.useState<ContractDetails>()
    const [info, setInfo] = React.useState<ContractInfo>();
    const [loading, setLoading] = React.useState<Boolean>(false);

    //Get contract data
    const getData = async () => {
        setLoading(true)

        let data = await getContractDetails(active, provider);
        let info = await fetch(`/api/fundraiser/${active}`).then(res => {
            return res.json();
        }).catch(err => {
            console.log(err);
        });
        setDetails(data);
        setInfo(info);

        setLoading(false);
    }

    React.useEffect(() => {
        getData()
    }, [active])


    if(active === ""){
        return <Center>NO PROJECT SELECTED</Center>
    }
    return (
    <DetailsContainer>
        {loading ? <LoadingPopup/> : null}
        <Funds>
            <h3>FUNDS</h3>
            <h4>Goal</h4>
            <p>{details && details.GOAL} ETH</p>
            <h4>Collected</h4>
            <p>{details && details.AMOUNT_RAISED} ETH</p>
            <h4>Progress</h4>
            <p>{details && details.PROGRESS}%</p>
        </Funds>
        <Contributers>
            <h3>CONTRIBUTERS</h3>
            <h4>Amount of contributers</h4>
            <p>{details && details.TOTAL_CONTRIBUTORS}</p>
            <h4>Average contribution</h4>
            <p>{details && details.AVERAGE_CONTRIBUTION} ETH</p>
        </Contributers>
        <Time>
            <h3>TIME</h3>
            <h4>Time left</h4>
            <p>20days FILLER</p>
            <Notice>This is calculated based on current blocktime, time can differ based on the network.</Notice>
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
            <h4>Organization</h4>
            <p>{info && info.organization}</p>
            <h4>Description</h4>
            <p>{info && info.description}</p>
        </Description>
    </DetailsContainer>
    )
}