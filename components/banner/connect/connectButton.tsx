/*

    - CONNECTION BUTTON IN BANNER

    This components creates and disbands the connection between the dapp and a wallet;
    Uses Web3Modal for easy connection UI.

    If connection succeeds, the isConnected context will be set to TRUE and the 
    setProvider context will contain the web3 connection with the provider that has been chosen.


*/

//
import React from 'react'

//Wallet connection
import { ConnectionContext } from '../../../context/connectionContext';
import {handleWeb3Connect } from '../../../lib/web3Connect';

//Context
import { ProviderContext } from '../../../context/providerContext';

//Styled-components
import { Container, ConnectionButton } from './styles';
import { useTooltip } from '../../../hooks/useTooltip';
import { UserContext } from '../../../context/userContext';



export const Connect: React.FC = () => {

    const {isConnected, setIsConnected} = React.useContext(ConnectionContext);
    const {setProvider} = React.useContext(ProviderContext);
    const {setUserData} = React.useContext(UserContext);

    //TOOLTIP
    const tooltipRef = React.useRef(null);
    const [activateTooltip, setActivateTooltip] = React.useState(false);
    const tooltip = useTooltip({description: "A true disconnection can only be aquired by disconnecting from your wallet application and refreshing our DApp.", ref: tooltipRef.current, active: activateTooltip})

    return (
    <Container>
        {tooltip}
        <ConnectionButton
            ref={tooltipRef} 
            onClick={() => {!isConnected ? handleWeb3Connect(setIsConnected, setProvider, setUserData) : null}}
            onMouseEnter={() => setActivateTooltip(true)}
            onMouseLeave={() => setActivateTooltip(false)}
        >{!isConnected ? "CONNECT" : "CONNECTED"}</ConnectionButton>
    </Container>
    )
}



