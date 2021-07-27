import React from 'react';

import {Bottom, Container} from '../styles/pageStyles'
import { HomeScreen } from '../components/pages/home';
import { ConnectionContext } from '../context/global/connectionContext';
import { useRouter } from 'next/router';
import HtmlHead from '../components/global/htmlHead';
import Header from '../components/global/header';

//TODO ADD DEV WALLET TO AUTO PAY 2% FUNDRAISER FEE


export default function Home() {


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
