/*

    - MAIN BANNER COMPONENT INCLUDES:
        * LOGO
        * REFBAR
        * CONNECTIONBUTTON
        * EXPLORER

*/

import React from 'react'
import styled from 'styled-components';
import {colors} from '../../../styles/colors';

//COMPONENTS
import Logo from './logo';
import Refbar from "./refbar";
import Connect from './connectButton';
import Explorer from './nav';
import ToolBar from './tooltip';

const Header: React.FC = () => {
    return (
        <Container>
            <ToolBar/>
            <Logo/>
            <Refbar/>
            <Explorer/>
            <Connect/>
        </Container>
    )
}

// STYLES FOR THE BANNER

const Container = styled.div`

    background: linear-gradient(90deg, ${colors.one} 0%, ${colors.two} 100%) ;
    height: 60px;
    line-height: 60px;

    display: grid;
    grid-template-columns: 200px 1fr auto auto;
    grid-gap: 15px;
    overflow: hidden;

    @media only screen and (max-width: 1050px){
        height: auto;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto 40px;
        padding: 15px;
    }

`

export default Header;

