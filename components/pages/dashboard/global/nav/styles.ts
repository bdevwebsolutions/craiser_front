import styled from 'styled-components';
import { colors, highlights } from '../../../../../styles/colors';

export const Container = styled.div`

    width: 100%;
    height: auto;
    padding: 15px;
    ul{
        display: row;
        flex-direction: row;
        list-style-type: none;
        padding: 0px;
        text-align: left;
        align-content: space-around;
        height: auto;

    }



    @media only screen and (max-width: 1100px){
        width: 100%;
        height: auto;
        background-color: ${colors.two};

        ul{
            flex-direction: row;
            justify-content: space-around;
            line-height: 50px;
        }
    }

`

export const ListItem = styled.li<{active: boolean}>`


    display: block;
    height: auto;
    width: 100%;
    font-size: 14px;
    cursor: pointer;
    padding: 5px 15px 5px 15px;
    text-transform: uppercase;
    border-left: solid 2px ${colors.three};
    margin-bottom: 25px;


    color: ${props => props.active ? highlights.seven : colors.seven};
    font-weight: ${props => props.active ? "bold" : "normal"};

    :hover{
        color: ${highlights.seven};
    }


    @media only screen and (max-width: 1100px){
        height: 50px;
        line-height: 50px;
    }
    


`