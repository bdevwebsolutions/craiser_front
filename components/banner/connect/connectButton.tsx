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
import {handleWeb3Connect, disbandWeb3Connection} from '../../../lib/web3Connect';

//Context
import { ProviderContext } from '../../../context/providerContext';

//Styled-components
import { Container, P } from './styles';
import { useTooltip } from '../../../hooks/useTooltip';



export const Connect: React.FC = () => {

    const {isConnected, setIsConnected} = React.useContext(ConnectionContext);
    const {setProvider} = React.useContext(ProviderContext);

    //TOOLTIP
    const tooltipRef = React.useRef(null);
    const [activateTooltip, setActivateTooltip] = React.useState(false);
    const tooltip = useTooltip({description: "Disconnecting from our app may require an additional disconnection process within your wallet", ref: tooltipRef.current, active: activateTooltip})

    return (
    <Container>
        {tooltip}
        <P  ref={tooltipRef} 
            onClick={() => {
                if(!isConnected){
                    handleWeb3Connect(setIsConnected, setProvider)
                } else {
                    disbandWeb3Connection(setIsConnected, setProvider);
                }
                }
            }
            onMouseEnter={() => setActivateTooltip(true)}
            onMouseLeave={() => setActivateTooltip(false)}
        >
        {!isConnected ? "CONNECT" : "DISCONNECT"}
        </P>
    </Container>
    )
}



