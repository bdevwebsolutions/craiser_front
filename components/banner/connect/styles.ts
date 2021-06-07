// STYLES FOR THE CONNECTIONBUTTON

import styled from 'styled-components';
import {colors} from '../../../styles/colors';

export const P = styled.p`
    font-weight: bold;
    cursor: pointer;
    text-align: right;
    padding-right: 5px;
    display: inline;

`

export const Container = styled.div`
    text-align: right;

    @media only screen and (max-width: 850px){
       text-align: left;
       font-size: 14px;
       height: 40px;
       line-height: 30px;
    }
`

export const ConnectionType = styled.div`
    *{
        display: inline;
    }


    display: grid;
    grid-template-columns: 1fr auto;
    padding: 0px 15px;
    background-color: ${colors.two};
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
        background-color: ${colors.three};
    }
`