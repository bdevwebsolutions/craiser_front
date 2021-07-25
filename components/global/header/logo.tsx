/*
    - LOGO IN BANNER (ALSO LINK TO "/")
*/
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';


const Logo: React.FC = () => <Header><Link href="/">CRAISER_.</Link></Header>



const Header = styled.h1`
    height: 60px;
    font-weight: bold;
    letter-spacing: 0px;
    text-align: center;
    cursor: default;

    @media only screen and (max-width: 1050px){
        text-align: left;
        font-size: 24px;
        height: 40px;
        grid-column: 1 / 3;
    }
`

export default Logo