import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    grid-template-rows: 18px 1fr;
    padding: 35px;
    grid-gap: 15px;

    @media only screen and (max-width: 1100px){
        padding: 0px !important;
        margin-top: 15px;
        grid-template-rows: auto 1fr;
    }
`

export const TitleBar = styled.div`
    width: 100%;
    line-height: 18px;
    text-align: left;
    display: block;
    width: 100%;
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0px 15px; 
    p{
        display: inline-block;
        width: 50%;
    }

    p:last-of-type{
        text-align: right;
        
    }

    @media only screen and (max-width: 1100px){
        padding: 0px !important;
       p{
           display: block;
           width: 100%;
           text-align: left !important;

       }
    }
`