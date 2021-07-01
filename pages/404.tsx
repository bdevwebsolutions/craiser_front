import { HtmlHead } from '../components/global';
import Link from 'next/link';
import React from 'react';

//styled-components
import {fourOFourContainer as Container, Warning} from '../styles/pageStyles';


export default function FourOFour() {
  return (
    <>
      <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
      <Container>
        <Warning>
            <p>404: How did you get here?</p>
            <h1>THIS PAGE HAS NOTHING TO OFFER.</h1>
            <Link href="/">GO BACK HOME</Link>
        </Warning>
      </Container>
    </>
  )
}



