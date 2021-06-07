import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import React from 'react';

//HANDLES THE CONENCTION TO A WALLET
export const handleWeb3Connect = async (setIsConnected: React.Dispatch<boolean>, setProvider: React.Dispatch<Web3 | undefined>) => {

    //ACTIVE CONNECTIONS
    // - Walletconnect
    // - Metamask
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "d200575c37fa451eb3bac352e8005496"
            }
        }
    }

    //Creates Modal
    const web3Modal = new Web3Modal({
        providerOptions
    })

    //Triggers modal and returns provider if succesfull connection
    const provider = await web3Modal.connect().then(res => {
        setIsConnected(true);
        return res;
    }).catch(err => {
        setIsConnected(false);
        console.warn(err);
    });

    //If provider is succesfull set listeners
    if(provider === undefined){
        return null;
    } else {
        const web3 = new Web3(provider);
        setProvider(web3);

        provider.on("accountsChanged", (accounts: string[]) => {
            console.log(accounts);
        });
        
        // Subscribe to chainId change
        provider.on("chainChanged", (chainId: number) => {
            console.log(chainId);
        });
        
        // Subscribe to provider connection
        provider.on("connect", (info: { chainId: number }) => {
            console.log(info);
        });
        
        // Subscribe to provider disconnection
        provider.on("disconnect", (error: { code: number; message: string }) => {
            setIsConnected(false);
            setProvider(undefined);
        });
    }

    
}

export const disbandWeb3Connection = (setIsConnected: React.Dispatch<boolean>, setProvider: React.Dispatch<Web3 | undefined>) => {
    setIsConnected(false);
    setProvider(undefined);
}