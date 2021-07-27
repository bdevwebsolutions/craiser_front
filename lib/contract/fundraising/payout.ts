
import Web3 from "web3"
import { userObject } from "../../../context/global/userContext"
import FundraiserContract from '../../../contracts/FundRaiser.json';

export const contribute = async (key: string, provider: Web3, userAddress, amount: string): Promise<boolean> => {

    //MAKE CONNECTION TO THE CONTRACT

    //If no public key is given return null and break function;
    if(key.length === 0){
        return null;
    }

    //Else make connection 
    //@ts-ignore
    let contract = new provider.eth.Contract(FundraiserContract.abi, key);

    //CONTRIBUTE
    let res = await contract.methods.contribute().send({from: userAddress, value: Web3.utils.toWei(amount, "ether")});

    return true;

}