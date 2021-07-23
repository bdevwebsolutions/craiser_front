import React from 'react'
import { ProviderContext } from '../../../../../../../../context/global/providerContext';
import { ContractDetails, getContractDetailsDeployer } from '../../../../../../../../lib/contract/fundraising/getFundraiserContract';
import { ApprovalBlock, ContributersBlock, DescriptionBlock, FundsBlock, TimeBlock } from './blocks';
import { LoadingPopup } from './popup';
import {Approval, Contributers, DetailsContainer, Funds, Description, Time, Center, Notice} from './styles';

// TODO WHITDRAWAL FUNCTION & TIME CALCULATION

/** 
--- DETAILS OF SMART CONTRACT DEPLOYED BY CURENT USER-----------------------

    @param: selected => Public key of selected smart contract

-------------------------------------------------------------------
*/

export type ContractInfo  = {
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

        let data = await getContractDetailsDeployer(active, provider);
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
        <FundsBlock details={details}/>
        <ContributersBlock details={details}/>
        <TimeBlock details={details}/>
        <ApprovalBlock details={details}/>
        <DescriptionBlock details={details} active={active} info={info} />
    </DetailsContainer>
    )
}