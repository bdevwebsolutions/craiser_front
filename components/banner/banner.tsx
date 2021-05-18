//BANNER
/*
    - LOGO
    - REFBAR
    - NAV
    - CONNECT

*/

import React from 'react'
import styled from 'styled-components';
import { Logo } from './logo';
import { Refbar } from "./refbar";
import {Connect} from './connect';
import { colors } from '../../styles/colors';

const Banner: React.FC = () => {
    return (
        <Container>
            <Logo/>
            <Refbar/>
            <Connect/>
        </Container>
    )
}

const Container = styled.div`

    background: linear-gradient(90deg, ${colors.one} 0%, ${colors.two} 100%) ;
    height: 60px;
    max-height: 60px;
    padding:  0px 15px;
    line-height: 60px;

    display: grid;
    grid-template-columns: 200px auto 100px;
    grid-gap: 15px;
    overflow: hidden;

`

export default Banner;

