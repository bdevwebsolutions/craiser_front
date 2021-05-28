import React from 'react'
import { Logo } from './logo/logo';
import { Refbar } from "./refbar/refbar";
import { Connect } from './connect/connectButton';
import { Container } from './styles';

const Banner: React.FC = () => {
    return (
        <Container>
            <Logo/>
            <Refbar/>
            <Connect/>
        </Container>
    )
}


export default Banner;

