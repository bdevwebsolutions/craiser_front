import Head from 'next/head'

//Logical components
import Banner from '../components/global/banner';
import Explorer from '../components/global/explorer';
import React from 'react';

import {Bottom, Container} from '../styles/pageStyles'
import ToolBar from '../components/global/toolbar';
import { HomeScreen } from '../components/pages/home';
import { ConnectionContext } from '../context/global/connectionContext';
import { useRouter } from 'next/router';
import { Header, HtmlHead } from '../components/global';

//TODO ADD DEV WALLET TO AUTO PAY 2% FUNDRAISER FEE


export default function Home() {

  const {isConnected} = React.useContext(ConnectionContext);
  const router = useRouter();

  React.useEffect(() => {
    if(isConnected){
      router.push('/dashboard')
    }
  }, [])

  return (
    <>
      <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
      <Container>
        <Header/>
        <HomeScreen/>
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}
