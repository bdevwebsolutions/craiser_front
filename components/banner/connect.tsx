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

export const Connect = () => {

    //DISPATCH AND STATE, needed for listeners
    const {connectionState, setConnectionState} = useContext(ConnectionContext);

    return (
    <Container>
        <P onClick={() => {
            if(Object.keys(connectionState).length === 0){
                initiateConnection(setConnectionState)
            } else {
                disbandConnection(setConnectionState)
            }
        }}>{Object.keys(connectionState).length === 0 ? "CONNECT" : "DISCONNECT"}</P>
    </Container>
    )
}


const P = styled.p`
    font-weight: bold;
    cursor: pointer;
    text-align: right;
`

const Container = styled.div`

`
