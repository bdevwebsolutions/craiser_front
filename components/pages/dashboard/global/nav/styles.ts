import styled from 'styled-components';
import { colors, highlights } from '../../../../../styles/colors';

export const Container = styled.div`

    width: 100%;
    height: 100%;
    border-right: solid 1px ${highlights.seven};
    padding: 10px;

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
    font-size: 11px;
    cursor: pointer;
    padding-left: 15px;
    text-transform: uppercase;


    color: ${props => props.active ? highlights.seven : colors.seven};


    :hover{
        color: ${highlights.seven};
    }


    @media only screen and (max-width: 1100px){
        height: 50px;
        line-height: 50px;
    }
    


`