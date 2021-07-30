//NEW FUNDRAISER SIGNING
/** 
    * @param _duration Duration of fund-raising part of Contract, in blocks
    * @param _initialPaymentDuration Period after _duration for owner to start releasing payments, in blocks
    * @param _goal Financial goal of the Smart Contract, in wei
    * @param _minimumContribution Minimum amount required for each contribution, in wei
    * TODO: REFACTOR
*/

import Web3 from "web3"
import { userObject } from "../../../context/global/userContext"
import FundraiserContract from '../../../contracts/FundRaiser.json';

//types
export type FundraiserData = {
    name: string,
    description: string,
    organization: string,
    form: FormData
}
type FormData = {
    deadline: number, //ENDTIME IN NORMAL TIME - CONVERT TO SECONDS
    goal: string, //GOAL IN ETH - CONVERT TO WEI
    minimumContribution: string, //MINIMUM CONTRIBUTION IN ETH - CONVERT TO WEI
}

const deployContract = async (provider: Web3, userData: userObject, fundraiserData: FundraiserData): Promise<userObject> => {
    
    // ---- BLOCKCHAIN DB ----- //
    //GET GAS AND BLOCKTIME INFO FROM API
    //THROW ERROR IF URL DOESN'T EXIST ANYMORE V
    let GASINFO = await fetch('https://ethgasstation.info/json/ethgasAPI.json')
        .then(async (res) => {
            let data = await res.json()
            return data;
        }
    ).catch(err => {
        throw new Error("An error occured while getting gas and block info");
    })

    //CREATE A NEW CONTRACT INSTANCE
    //@ts-ignore
    const CONTRACT = new provider.eth.Contract(FundraiserContract.abi)

    //HANDLE FORMDATA
    let DEADLINE = Math.round(fundraiserData.form.deadline / GASINFO.block_time).toString();
    let GOAL = Web3.utils.toWei(fundraiserData.form.goal, 'ether');
    let MINIMUM_CONTRIBUTION = Web3.utils.toWei(fundraiserData.form.minimumContribution, 'ether');

    console.log(GOAL, MINIMUM_CONTRIBUTION)

    //BUILD CONTRACT WITH DATA
    const CONTRACT_DEPLOY = CONTRACT.deploy({
        data: FundraiserContract.bytecode,
        arguments: [
            DEADLINE, 
            GOAL, 
            MINIMUM_CONTRIBUTION
        ],
    })

    //CALCULATE AMOUNT OF GAS NEEDED
    let GASAMOUNT = await CONTRACT_DEPLOY.estimateGas({}, (error, gasAmount) => {
        if(error){
            throw new Error('An error occured while estimating the gas cost')
        }
        return gasAmount;
    })

    //DEPLOY CONTRACT
    let DEPLOYED_CONTRACT = await CONTRACT_DEPLOY.send({
        from: userData.walletAddress,
        gas: Math.round(GASAMOUNT / 100 * 105),
        gasPrice: Web3.utils.toWei((GASINFO.average / 10).toString(), 'Gwei'),
    }).then(async (newContractInstance) => {
        //VERIFY CONTRACT
        console.log(`
            OWNER: ${await newContractInstance.methods.owner().call()},
            GOAL: ${await newContractInstance.methods.goal().call()},
            RAISED: ${await newContractInstance.methods.amountRaised().call()},
            DEADLINE: ${await newContractInstance.methods.deadline().call()},
        `)
        return newContractInstance;
    }).catch(err => {
        //CATCH ERRORS
        throw new Error('An error occured while deploying your contract');
    });

    //UPDATE DB
    //@ts-ignore
    let updatedUserData  = await updateDB(DEPLOYED_CONTRACT._address, fundraiserData.name, fundraiserData.description, fundraiserData.organization, userData.walletAddress, fundraiserData.form.goal).then(res => {
        console.log(res)
        return res;
    }).catch(err => {
        throw new Error('An error occured while updating our database')
    })

    return updatedUserData;
    
    
}

//UPDATES DATABASE AND RETURNS USERDATA OR FALSE
const updateDB = async (contractAddress, title, description, organization, walletAddress) => {
    
    let params = {contractAddress, contractTitle: title, contractDescription: description, contractOrganization: organization, walletAddress};
    
    let data = await fetch(`/api/contract/${contractAddress}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(res => {
        return res.json()
    }).catch(err => {
        throw new Error('An error occured while updating our database');
    })

    return data;

}   


export {deployContract}