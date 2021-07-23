/*

    - MAIN BANNER COMPONENT INCLUDES:
        * LOGO
        * REFBAR
        * CONNECTIONBUTTON

*/

import React from 'react'
import { Logo } from './logo/logo';
import { Refbar } from "./refbar/refbar";
import { Connect } from './connect/connectButton';
import { Container } from './styles';
import Explorer from './nav';

const Banner: React.FC = () => {
    return (
        <Container>
            <Logo/>
            <Refbar/>
            <Explorer/>
            <Connect/>
        </Container>
    )
}


export default Banner;

