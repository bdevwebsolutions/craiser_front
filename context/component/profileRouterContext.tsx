import React from 'react'

export type Route = "connection" | "projects" | "funding";

export type Props = {
    route: Route
    setRoute: React.Dispatch<Route>
}

export const ProfileRouterContext = React.createContext<Partial<Props>>({})

const ProfileRouterProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [route, setRoute] = React.useState<Route>('connection');

    return <ProfileRouterContext.Provider value={{route, setRoute}}>{children}</ProfileRouterContext.Provider>
}

export default ProfileRouterProvider;