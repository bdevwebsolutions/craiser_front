/*

 REUSEABLE HEAD COMPONENT 

*/

import React from 'react'
import Head from 'next/head';


const HtmlHead: React.FC<{title: string, description: string}> = ({title, description}) => {
   return( 
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HtmlHead;

