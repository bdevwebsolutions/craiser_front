import { useRouter } from 'next/router';
import React from 'react'
import { ConnectionContext } from '../../context/global/connectionContext';
import { UserContext } from '../../context/global/userContext';

/*

    CHECK'S IF USER IS CONNECTED ELSE REROUTES TO INDEX
    RETURN COMPONENT WITH USERDATA AS AN OBJECT

*/


const WithConnection = WrappedComponent => props => {
    
    const {isConnected} = React.useContext(ConnectionContext);
    const {userData} = React.useContext(UserContext);
    const Router = useRouter()

    React.useEffect(() => {
        if(!isConnected || userData === undefined){
            Router.replace('/');
          }
    },[isConnected, userData])

    React.useEffect(() => {
        if(!isConnected || userData === undefined){
          Router.replace('/');
        }
    }, [])

    return <WrappedComponent userData={{...userData}} {...props}/>

}

export default WithConnection;