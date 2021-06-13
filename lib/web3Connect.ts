//PROVIDERS
import WalletConnectProvider from '@walletconnect/web3-provider';
import {WalletLink} from 'walletlink';

import {userObject} from '../context/userContext';

import Web3 from 'web3';
import Web3Modal from 'web3modal';
import React from 'react';

const INFURA_ID = "d200575c37fa451eb3bac352e8005496"

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: INFURA_ID
        }
    },
    'custom-walletlink': {
        display: {
            logo: "coinbase-wallet.svg",
            name: "WalletLink",
            description: "Scan with WalletLink to connect",
        },
        options:{
            appName: "craiser_.",
            networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
            chainId: 1,
        },
        package: WalletLink,
        connector: async (_, options) => {
            const { appName, networkUrl, chainId } = options
            const walletLink = new WalletLink({
              appName
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
        },
    }
}

//HANDLES THE CONENCTION TO A WALLET
export const handleWeb3Connect = async (setIsConnected: React.Dispatch<boolean>, setProvider: React.Dispatch<Web3 | undefined>, setUserData: React.Dispatch<userObject>) => {


    //Creates Modal
    const web3Modal = new Web3Modal({
        providerOptions
    })

    //Triggers modal and returns provider if succesfull connection
    //Calls get user api to get or create the connected user to the database
    const provider = await web3Modal.connect().then(res => {
        setIsConnected(true);
        return res;
    }).catch(err => {
        setIsConnected(false);
        console.warn(err);
    });

    //If provider is succesfull set listeners and get initial data
    if(provider === undefined){
        return null;
    } else {
        const web3 = new Web3(provider);
        setProvider(web3);

        //CONNECTION IS INITIATED, GET USER FROM DB BASED ON ADDRESS;
        let accounts = await web3.eth.getAccounts();
        
        //api call to user
        let user = await fetch(`/api/user/${accounts[0]}`).then(res => {
            return res.json();
        }).catch(err => {
            return err;
        })

        //Set user data to context
        setUserData(user);

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
            console.log('CONNdfezECT')
        });
        
        // Subscribe to provider disconnection
        provider.on("disconnect", (error: { code: number; message: string }) => {
            setUserData(undefined);
            setIsConnected(false);
            setProvider(undefined);
        });
    }
    
}