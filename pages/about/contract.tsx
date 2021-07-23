import Head from 'next/head'

//Logical components
import React from 'react';

import InfoContent from '../../components/pages/about';

import {Bottom, Container} from '../../styles/pageStyles'

import { Header } from '../../components/global';

//TODO ADD DEV WALLET TO AUTO PAY 2% FUNDRAISER FEE


export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header/>
        CONTRACT INFO
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}
