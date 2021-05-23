import React, {useContext} from 'react'
import styled from 'styled-components'
import {connector, initiateConnection, disbandConnection} from '../../lib/connector';


//README
/*
    CONNECTION BUTTON TO CONNECT A WALLET
    2 STATES
        -NOT CONNECTED
            => 
                Creates a new session and adds listeners to update state
        -ALREADY CONNECTED
            =>
                Disconnects and resets the state

*/



//Context
import {ConnectionContext} from '../../context/connectionContext';
import Popup from '../popup/popup';
import { colors } from '../../styles/colors';

export const Connect = () => {

    //DISPATCH AND STATE, needed for listeners
    const {connectionState, setConnectionState} = useContext(ConnectionContext);

    //POPUP
    const [popup, setPopup] = React.useState(false);

    //CONNECTION FUNCTIONS
    const handleWalletConnect = () => {
        if(Object.keys(connectionState).length === 0){
            initiateConnection(setConnectionState)
            setPopup(false)
        } else {
            disbandConnection(setConnectionState)
            setPopup(false)
        }
    }

    return (
    <Container>
        <P onClick={() => {setPopup(!popup)}}>{Object.keys(connectionState).length === 0 ? "CONNECT" : "DISCONNECT"}</P>
        <Popup active={popup} setActive={setPopup}>
            <ConnectionType onClick={() => handleWalletConnect()}><p>WalletConnect</p> <b>{Object.keys(connectionState).length === 0 ? "Click To Connect" : "Click To Disconnect"}</b></ConnectionType>
        </Popup>
    </Container>
    )
}


const P = styled.p`
    font-weight: bold;
    cursor: pointer;
    text-align: right;
    padding-right: 5px;
`

const Container = styled.div`

`

const ConnectionType = styled.div`
    *{
        display: inline;
    }

    display: grid;
    grid-template-columns: 1fr auto;
    padding: 0px 15px;
    background-color: ${colors.two};
    border-radius: 5px;
    margin-bottom: 10px;

    cursor: pointer;
`
