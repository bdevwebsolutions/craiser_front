import styled from 'styled-components';
import {colors} from './colors';

//MAIN
export const Container = styled.div`

    width: auto;
    height: 100%;
    min-height: 100vh;
    background: ${colors.one} ;
    display: block;
    padding: 10px;
    padding: 15px;

    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-gap: 15px;
`


//404 PAGE
export const fourOFourContainer = styled.div`

    width: auto;
    height: auto;
    background: ${colors.one};
    display: block;
    padding: 10px;
    height: 100vh;
    max-height: 100vh;
    padding: 15px;

    display: grid;
    grid-gap: 25px;
    place-items: center;
`


export const Warning = styled.div`
    text-align: center;

    a{
        color: ${colors.seven};

        :hover{
            font-weight: bold;
        }
    }
    
`