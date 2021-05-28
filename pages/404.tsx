import Head from 'next/head'
import Link from 'next/link';

//styled-components
import {fourOFourContainer as Container, Warning} from '../styles/pageStyles';


export default function FourOFour() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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



