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
import { ConnectionContext } from '../../../context/global/connectionContext';
import {handleWeb3Connect } from '../../../lib/web3Connect';

//Context
import { ProviderContext } from '../../../context/global/providerContext';

//Styled-components
import styled from 'styled-components';
import { highlights } from '../../../styles/colors';
import { useTooltip } from '../../../hooks/useTooltip';
import { UserContext } from '../../../context/global/userContext';



const Connect: React.FC = () => {

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



// STYLES

const ConnectionButton = styled.p`
    font-weight: bold;
    cursor: pointer;
    text-align: right;
    display: inline;
    padding: 0px 12px;


`

const Container = styled.div`
    text-align: right;
    background-color: ${highlights.seven};



    @media only screen and (max-width: 1050px){
       text-align: center;
       font-size: 14px;
       height: auto;
       padding: 5px 0px;
       line-height: 30px;
    }
`

export default Connect;