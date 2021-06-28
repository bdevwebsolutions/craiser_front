import Link from 'next/link'
import React from 'react'
import { AiOutlineWallet } from 'react-icons/ai'
import { Container, Start, Title } from './styles'



export const HomeScreen: React.FC = () => {
    return (
    <Container>
        <Start>
            <div>
                <h3>CONNECT YOUR WALLET TO CONTINUE AND VIEW YOUR PROFILE.</h3>
            </div>
            <div>
                <p><Link href="/info">OR READ MORE ABOUT THE CRAISER_. DAPP</Link></p>
            </div>
        </Start>
    </Container>
    )
}