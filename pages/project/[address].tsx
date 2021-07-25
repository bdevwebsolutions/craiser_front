import Head from 'next/head'

//Logical components
import React from 'react';

import {Bottom, Container} from '../../styles/pageStyles'
import { GetStaticPropsContext } from 'next';
import HtmlHead from '../../components/global/htmlHead';
import { FundraiserPage } from '../../components/pages/fundraiser';
import { useRouter } from 'next/router';
import Header from '../../components/global/header';

//TODO ERRO HANDLING AND LOADING...


export type contractData = {
  contractAddress: string,
  createdAt: string,
  description: string,
  donated: number
  goal: number
  organization: string,
  title: string,
  updatedAt: string,
  upvotes: number,
  __v: number,
  _id: string,
}


export default function Home(props) {
 
  const [contractDataDB, setContractDataDB] = React.useState<contractData>();
  const router = useRouter();

  const getData = async () => {
    let data = await fetch(`/api/contract/${props.address}`).then(res => {
      return res.json()
    });
    if(Object.keys(data).length !== 0){
      setContractDataDB(data);
    } else {
      router.push('/')
    }

  }

  React.useEffect(() => {
    getData()
  }, [props.address])

  return (
    <>
      <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
      <Container>
        <Header/>
        <FundraiserPage data={{...contractDataDB}}/>
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

