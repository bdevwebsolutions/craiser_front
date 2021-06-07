// STYLES FOR THE REFBAR
import styled from 'styled-components';
import {colors} from '../../../styles/colors';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
    grid-gap: 5px;
    width: 450px;

    @media only screen and (max-width: 850px){
        width: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        min-width: 0px !important;
    }

`

export const Button = styled.button`

    height: 40px;
    margin-top: 10px;
    color: white;
    border: none;
    background-color: ${colors.one};
    border-radius: 5px;
    line-height: 37px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    border: solid 2px ${colors.three};
    text-transform: uppercase;
    cursor: pointer;


    :hover{
        border-radius: 0;
    }
`


export const Input = styled.input`
    height: 40px;
    margin-top: 10px;
    color: white;
    border: none;
    background-color: ${colors.three};
    border-radius: 5px;
    padding-left: 15px;
    text-transform: lowercase;

    ::placeholder{
        color: white;
        font-weight: bold;
        font-size: 12px;
    }

`