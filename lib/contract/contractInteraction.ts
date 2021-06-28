/** 
--- SMART COTNRACT INTERACTION-----------------------

    Communication between the smart contract and user or contributer

-------------------------------------------------------------------
*/

import Web3 from "web3";
import FundraiserContract from '../../contracts/FundRaiser.json';
import { secondsToDhms } from "../../util/secondsToDHMS";

/** 
--- INTERACTION WITH A PRE-DEPLOYED SMART CONTRACT-----------------------

    * !FUNCTION - getContractDetails
        @param: key => Public key of selected smart contract
        @param: provider => Web3 provider deliverd from context

-------------------------------------------------------------------
*/

//Return type for getContractDetails function
export type ContractDetails = {
    GOAL: string,
    AMOUNT_RAISED: string,
    PROGRESS: number,
    TOTAL_CONTRIBUTORS: number,
    AVERAGE_CONTRIBUTION: number,
}


// CONTRACTDETAILS

export const getContractDetails = async (key: string, provider: Web3): Promise<ContractDetails> => {

    //MAKE CONNECTION TO THE CONTRACT

    //If no public key is given return null and break function;
    if(key.length === 0){
        return null;
    }

    //Else make connection 
    //@ts-ignore
    let contract = new provider.eth.Contract(FundraiserContract.abi, key);

    //General gasinfo
    let GASINFO = await fetch('https://ethgasstation.info/json/ethgasAPI.json')
    .then(async (res) => {
        let data = await res.json()
        return data;
    }).catch(err => {
        throw new Error("An error occured while getting gas and block info");
    })
    
    //DEADLINE - IN BLOCK NUMBERS - GET CURRENT BLOCKTIME FOR ACCURATE TIMING
    /*
        deadline * GASINFO.block_time = time left in seconds
        recalculate to days/hours/minutes = enddate
        calculate days between now and enddate

    */
    //TODO DO THIS WHEN LAUNCHING ON MAINNET
    /*
    let deadlineInBlocks = await contract.methods.deadline().call();
    let timeInSeconds = deadlineInBlocks * GASINFO.block_time;
    let TIME_LEFT = secondsToDhms(timeInSeconds);
    console.log(TIME_LEFT);
    */

    //GOAL - IN WEI CALCULATE IN ETH
    let goalInWei = await contract.methods.goal().call();  // Total amount needing to be raised, in wei
    let GOAL = Web3.utils.fromWei(goalInWei, 'ether');

    //RAISED - IN WEI CALCULATE IN ETH
    let amountRaisedInWei = await contract.methods.amountRaised().call();
    let AMOUNT_RAISED = Web3.utils.fromWei(amountRaisedInWei, 'ether');

    //PROGRESS - IN PERCENTAGE
    let PROGRESS = parseInt(amountRaisedInWei) / parseInt(goalInWei) * 100;

    //TOTAL CONTRIBUTERS
    let TOTAL_CONTRIBUTORS = await contract.methods.totalContributors().call();

    //AVERAGE CONTRIBUTION
    let AVERAGE_CONTRIBUTION;
    if(TOTAL_CONTRIBUTORS > 0){
        AVERAGE_CONTRIBUTION = parseInt(AMOUNT_RAISED) / TOTAL_CONTRIBUTORS;
    } else {
        AVERAGE_CONTRIBUTION = 0;
    }
    
    return {GOAL, AMOUNT_RAISED, PROGRESS, TOTAL_CONTRIBUTORS, AVERAGE_CONTRIBUTION};

}