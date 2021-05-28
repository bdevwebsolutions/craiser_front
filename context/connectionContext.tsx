import React from 'react'

// CHECKS IF WALLET IS CONNECTED AND RETURNS BOOLEAN FOR USE IN CHECKING
//SET IT IN CONNECTION METHOD

export const ConnectionContext = React.createContext<Partial<{isConnected: boolean, setIsConnected: React.Dispatch<boolean>}>>({});


const ConnectionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [isConnected, setIsConnected] = React.useState<boolean>(() => {
        if(typeof window !== "undefined"){
            if(window.localStorage.getItem('walletconnect') !== null){
                return true;
            }

            return false;
        }
    })

    return <ConnectionContext.Provider value={{isConnected, setIsConnected}}>{children}</ConnectionContext.Provider>
}


export default ConnectionProvider;