import React from 'react'

// USERDATA FROM DB

export type userObject = {
    walletAddress: string,
    projects: Array<any>
    upvotes: Array<string>
    following: Array<string>
    funding: Array<string>
}

type Props = {
    userData: userObject,
    setUserData: React.Dispatch<userObject | undefined>
}

export const UserContext = React.createContext<Partial<Props>>({});


const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    //USER CONNECTED STATE
    const [userData, setUserData] = React.useState<userObject | undefined>(undefined)

    return <UserContext.Provider value={{userData, setUserData}}>{children}</UserContext.Provider>
}


export default UserProvider;