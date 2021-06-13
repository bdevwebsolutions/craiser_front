import React from 'react'
import Web3 from 'web3';

//PROVIDES A WEB3 INSTANCE WHEN A CONNECTION IS INITIATED;

type Props = {
    provider: Web3
    setProvider: React.Dispatch<Web3 | undefined >
}

export const ProviderContext = React.createContext<Partial<Props>>({});

const ProviderProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [provider, setProvider] = React.useState(undefined);

    return <ProviderContext.Provider value={{provider, setProvider}}>{children}</ProviderContext.Provider>

}

export default ProviderProvider;