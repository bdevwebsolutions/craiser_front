//NEW FUNDRAISER SIGNING
/** 
    * @param _duration Duration of fund-raising part of Contract, in blocks
    * @param _initialPaymentDuration Period after _duration for owner to start releasing payments, in blocks
    * @param _goal Financial goal of the Smart Contract, in wei
    * @param _minimumContribution Minimum amount required for each contribution, in wei
    * TODO: REFACTOR
*/

import Web3 from "web3"
import { userObject } from "../../context/userContext"
import FundraiserContract from '../../contracts/FundRaiser.json';

export type FundraiserData = {
    name: string,
    description: string,
    organization: string,
    form: FormData
}

type FormData = {
    deadline: number, //ENDTIME IN NORMAL TIME - CONVERT TO SECONDS
    goal: number, //GOAL IN ETH - CONVERT TO WEI
    minimumContribution: number, //MINIMUM CONTRIBUTION IN ETH - CONVERT TO WEI
    initialPaymentDuration: number, //SET FIXED TO 0
}

const deployContract = async (provider: Web3, userData: userObject, fundraiserData: FundraiserData): Promise<boolean | userObject> => {
    
    // ---- BLCOCKCHAIN DB ----- //
    //GET GAS AND BLOCKTIME INFO FROM API
    let GASINFO = await fetch('https://ethgasstation.info/json/ethgasAPI.json')
        .then(async (res) => {
            let data = await res.json()
            return data;
        }
    );

    //CREATE A NEW CONTRACT INSTANCE
    //@ts-ignore
    const CONTRACT = new provider.eth.Contract(FundraiserContract.abi)

    //HANDLE FORMDATA
    let DEADLINE = Math.round(fundraiserData.form.deadline / GASINFO.block_time).toString();
    let INITIAL_PAYMENT_DURATION  = fundraiserData.form.initialPaymentDuration.toString();
    let GOAL = Web3.utils.toWei(fundraiserData.form.goal.toString(), 'ether');
    let MINIMUM_CONTRIBUTION = Web3.utils.toWei(fundraiserData.form.minimumContribution.toString(), 'ether');

    //BUILD CONTRACT WITH DATA
    const CONTRACT_DEPLOY = CONTRACT.deploy({
        data: FundraiserContract.bytecode,
        arguments: [
            DEADLINE, 
            INITIAL_PAYMENT_DURATION, 
            GOAL, 
            MINIMUM_CONTRIBUTION
        ],
    })

    //CALCULATE AMOUNT OF GAS NEEDED
    let GASAMOUNT = await CONTRACT_DEPLOY.estimateGas({}, (error, gasAmount) => {
        return gasAmount;
    })

    //DEPLOY CONTRACT
    let DEPLOYED_CONTRACT = await CONTRACT_DEPLOY.send({
        from: userData.walletAddress,
        gas: GASAMOUNT,
        gasPrice: GASINFO.average.toString(),
    }).then(async (newContractInstance) => {
        //VERIFY CONTRACT
        console.log(newContractInstance)
        console.log(`
            OWNER: ${await newContractInstance.methods.owner().call()},
            GOAL: ${await newContractInstance.methods.goal().call()},
            RAISED: ${await newContractInstance.methods.amountRaised().call()},
            DEADLINE: ${await newContractInstance.methods.deadline().call()},
        `)
        return newContractInstance;
    }).catch(err => {
        //CATCH ERRORS
        window.alert(err);
        return false;
    });
    
    if(DEPLOYED_CONTRACT === false){
        return false;
    } else {
        //@ts-ignore
        let res  = await updateDB(DEPLOYED_CONTRACT._address, fundraiserData.name, fundraiserData.description, fundraiserData.organization, userData.walletAddress)
        //Return new userData
        if(res){
            return res;
        } else {
            return false;
        }
    }
    
}

//UPDATES DATABASE AND RETURNS USERDATA OR FALSE
const updateDB = async (contractAddress, title, description, organization, walletAddress) => {
    let params = {contractAddress, contractTitle: title, contractDescription: description, contractOrganization: organization, walletAddress};
    let data = await fetch(`/api/fundraiser/${contractAddress}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(res => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })

    if(data){
        return data;
    } else {
        return false;
    }


}   


export {deployContract}