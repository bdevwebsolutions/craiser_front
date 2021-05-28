import { useRouter } from 'next/router';
import React from 'react'
import { ConnectionContext } from '../../../context/connectionContext';

//Connection lib
import {initiateConnection, disbandConnection} from '../../../lib/connector';

//Components
import Popup from '../../popup/popup';

//Styled-components
import { ConnectionType, Container, P } from './styles';

export const Connect = () => {

    const {isConnected, setIsConnected} = React.useContext(ConnectionContext);
    const router = useRouter();
    //POPUP
    const [popup, setPopup] = React.useState(false);

    //CONNECTION FUNCTIONS
    const handleWalletConnect = () => {
        if(!isConnected){
            initiateConnection(setIsConnected)
            setPopup(false)
        } else {
            disbandConnection(setIsConnected)
            setPopup(false)
            if(router.pathname.includes('/profile')){
                router.push('/')
            }
        }
    }

    return (
    <Container>
        <P onClick={() => {setPopup(!popup)}}>{!isConnected ? "CONNECT" : "DISCONNECT"}</P>
        <Popup active={popup} setActive={setPopup}>
            <ConnectionType onClick={() => handleWalletConnect()}><p>WalletConnect</p> <b>{!isConnected ? "Click To Connect" : "Click To Disconnect"}</b></ConnectionType>
        </Popup>
    </Container>
    )
}



