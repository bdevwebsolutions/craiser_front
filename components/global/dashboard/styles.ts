import styled from 'styled-components';
import { TextContainer } from '../markup';

export const DashboardContainer = styled.div`

    width: 100%;
    height: 100%;
    padding: 5px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    
    @media only screen and (max-width: 1050px){
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        padding: 0px;

        div:first-of-type{
            align-self: center;
            margin: 0px auto;
        }
    }

`

export const DashboardContent =  styled(TextContainer)`
    max-width: 100% !important;
    word-break: break-all;

    @media only screen and (max-width: 1050px){
        padding-top: 0px !important;
    }


`