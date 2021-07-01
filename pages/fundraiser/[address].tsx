import Head from 'next/head'

//Logical components
import React from 'react';

import {Bottom, Container} from '../../styles/pageStyles'
import ToolBar from '../../components/global/toolbar';
import { GetStaticPropsContext } from 'next';
import { Header, HtmlHead } from '../../components/global';

//TODO ERRO HANDLING AND LOADING...


export default function Home(props) {
 
  const [contractDataDB, setContractDataDB] = React.useState<Partial<{}>>({});

  const getData = async () => {
    let data = await fetch(`/api/fundraiser/${props.address}`).then(res => {
      return res.json()
    });
    setContractDataDB(data);
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
      <Container>
        <Header/>
        <p>{props.address}</p>
        {/* @ts-ignore  */}
        <p>{contractDataDB && contractDataDB.description}</p>
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}


export async function getServerSideProps(context: GetStaticPropsContext){

  return {
    props: {address: context.params.address}
  }

}

