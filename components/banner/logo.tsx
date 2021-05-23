import React from 'react'
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Logo: React.FC = () => {
    return <Header>CRAISER_.</Header>
}

const Header = styled.h1`
    height: 60px;
    font-weight: bold;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;
`
