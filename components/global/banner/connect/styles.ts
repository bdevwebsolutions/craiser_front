// STYLES FOR THE CONNECTIONBUTTON
import styled from 'styled-components';


export const ConnectionButton = styled.p`
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
