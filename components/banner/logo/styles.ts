// STYLES FOR THE LOGO
import styled from 'styled-components';
import { highlights } from '../../../styles/colors';

export const Header = styled.h1`
    height: 60px;
    font-weight: bold;
    letter-spacing: 0px;
    text-align: center;
    cursor: default;

    @media only screen and (max-width: 850px){
        text-align: left;
        font-size: 24px;
        height: 40px;
    }
`
