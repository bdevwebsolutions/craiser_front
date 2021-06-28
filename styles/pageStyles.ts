import styled from 'styled-components';
import {colors, highlights} from './colors';

//BOTTOM
export const Bottom = styled.div`
    text-align: center;
    background-color: ${colors.one};
    color: ${highlights.seven};
`

//MAIN
export const Container = styled.div`

    width: auto;
    height: auto;
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

    h1{
        color: ${highlights.seven};
    }
    
`