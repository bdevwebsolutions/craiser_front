import Head from 'next/head'
import {useRouter} from 'next/router';

//Logical components
import Banner from '../components/banner';
import Explorer from '../components/explorer/explorer';
import ProfileContainer from '../components/profile';
import React from 'react';

//context
import {ConnectionContext} from '../context/connectionContext';

//routeprovider
import ProfileRouterProvider from '../context/component/profileRouterContext';


//styled-components
import {Bottom, Container} from '../styles/pageStyles'
import ToolBar from '../components/toolbar';
import { UserContext } from '../context/userContext';

 
const Profile = () => {

  const {isConnected} = React.useContext(ConnectionContext);
  const {userData} = React.useContext(UserContext);
  const Router = useRouter()

  React.useEffect(() => {
    if(!isConnected || userData === undefined){
      Router.replace('/');
    }
  }, [isConnected, userData])


  React.useEffect(() => {
    if(!isConnected || userData === undefined){
      Router.replace('/');
    }
  }, [])

  return (
    <>
      <Head>
        <title>Craiser - Profile Page</title>
        <meta name="description" content="craiser, web3 based fundraising profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ToolBar/>
        <Banner/>
        <Explorer/>
        <ProfileRouterProvider>
          <ProfileContainer userData={{...userData}} />
        </ProfileRouterProvider>
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}


export default Profile;


