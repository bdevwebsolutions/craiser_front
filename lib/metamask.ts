import React from 'react';
import Web3 from 'web3';

declare let window: any;

export const metamaskConnect = async (setIsConnected: React.Dispatch<boolean>, setAddress: React.Dispatch<string>, setProvider: React.Dispatch<"walletconnect" | "metamask" | undefined>) => {
    if(window.ethereum){
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    } else if(window.web3){
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        window.alert('Non-ethereum browser detected, you should consider trying metamask')
    }

    const web3 = window.web3;
    //Set Account
    const accounts = await web3.eth.getAccounts();
    if(accounts.length === 0){
        return null;
    } else {
        setAddress(accounts[0]);
        setProvider("metamask");
        setIsConnected(true);
    }


}