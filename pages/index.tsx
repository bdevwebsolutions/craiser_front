import Head from 'next/head'

//Logical components
import Banner from '../components/banner';
import Explorer from '../components/explorer/explorer';
import React from 'react';

import {Bottom, Container} from '../styles/pageStyles'
import ToolBar from '../components/toolbar';
import { HomeScreen } from '../components/home';
import { ConnectionContext } from '../context/connectionContext';
import { useRouter } from 'next/router';

//TODO ADD DEV WALLET TO AUTO PAY 2% FUNDRAISER FEE


export default function Home() {

  const {isConnected} = React.useContext(ConnectionContext);
  const router = useRouter();

  React.useEffect(() => {
    if(isConnected){
      router.push('/profile')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ToolBar/>
        <Banner/>
        <Explorer/>
        <HomeScreen/>
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}
