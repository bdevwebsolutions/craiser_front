import React from 'react'

// CHECKS IF WALLET IS CONNECTED AND RETURNS BOOLEAN FOR USE IN CHECKING
//SET IT IN CONNECTION METHOD

export const ConnectionContext = React.createContext<Partial<{isConnected: boolean, setIsConnected: React.Dispatch<boolean>}>>({});


const ConnectionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    //USER CONNECTED STATE
    const [isConnected, setIsConnected] = React.useState<boolean>(false)

    return <ConnectionContext.Provider value={{isConnected, setIsConnected}}>{children}</ConnectionContext.Provider>
}


export default ConnectionProvider;