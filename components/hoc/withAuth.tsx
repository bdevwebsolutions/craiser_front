import {useRouter} from 'next/router';

const withAuth = (WrappedComponent) => {
 
    return (props) => {
        if(typeof window !== "undefined"){
            const Router = useRouter()

            //IF WALLETCONNECT IS NOT CONNECTED DON'T ALLOW PROFILE ROUTE

            if(window.localStorage.getItem('walletconnect') === null){
                Router.replace('/');
                return null;
            }

            return <WrappedComponent {...props}/>
        }

        return null;
    }
}

export default withAuth;