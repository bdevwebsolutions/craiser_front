import React, {createContext, Dispatch, ReactNode, useEffect} from 'react'
import {connector} from '../lib/connector';


//README
/*
    CONNECTION STATE
    2 STATES
        -NOT CONNECTED
            => 
                Waits till connection is inited
        -ALREADY CONNECTED
            =>
                Listens

*/


type connectParams = {
    "peerId": string,
    "peerMeta": {
        "description": string,
        "url": string,
        "icons": Array<string>,
        "name": string
    },
    "chainId": number,
    "accounts": Array<string>
}

type contextType = {
    connectionState: connectParams | {},
    setConnectionState: Dispatch<connectParams | {}>,
}


export const ConnectionContext = createContext<Partial<contextType>>({});

const ConnectionProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [connectionState, setConnectionState] = React.useState<connectParams | {}>({})

    //IF STILL CONNECTED GET DATA AND SET TO STATE
    useEffect(() => {
        if(connector.connected){

            //Connectiondata
            let d = {
                    peerId: connector.peerId,
                    peerMeta: connector.peerMeta,
                    chainId: connector.chainId,
                    accounts: connector.accounts,
                }
            
            setConnectionState(d);

            //SUBSCRIBE TO LISTENERS
            // Subscribe to connection events
            connector.on("connect", (error, payload) => {
                if (error) {
                console.log(error);
                }
                setConnectionState(payload.params[0]);
            });
            
            connector.on("session_update", (error, payload) => {
                if (error) {
                console.log(error);
                }
            
                // Get updated accounts and chainId
                setConnectionState(payload.params[0]);
            });
            
            connector.on("disconnect", (error, payload) => {
                if (error) {
                console.log(error);
                }
            
                // Delete connector
                setConnectionState({});
            });
        }
    },[])


    return <ConnectionContext.Provider value={{connectionState, setConnectionState}}>{children}</ConnectionContext.Provider>

}

export default ConnectionProvider;