// STYLES FOR THE CONNECTIONBUTTON
import styled from 'styled-components';
import { colors, highlights } from '../../../../styles/colors';


export const ConnectionButton = styled.p`
    font-weight: bold;
    cursor: pointer;
    text-align: right;
    display: inline;
    padding: 0px 12px;


`

export const Container = styled.div`
    text-align: right;
    background-color: ${highlights.seven};



    @media only screen and (max-width: 850px){
       text-align: left;
       font-size: 14px;
       height: 40px;
       line-height: 30px;
    }
`
