/*

 REUSEABLE TOP COMPONENT FOR THE BANNER TOOLBAR AND EXPLORER

*/


import React from 'react'
import Banner from './banner';
import Toolbar from './toolbar';
import Explorer from './explorer';
import Head from 'next/head';




const Header = () => {
    return (
    <>
        <Toolbar/>
        <Banner/>
        <Explorer/>
    </>
    )
}

const HtmlHead: React.FC<{title: string, description: string}> = ({title, description}) => {
   return( 
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export {Header, HtmlHead};

