import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Container = styled.div`

    width: 100%;
    height: 240px;
    background-color: ${colors.four};
    border-radius: 5px;

    ul{
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0px;
        text-align: center;
        align-content: space-around;
        height: auto;

    }

    @media only screen and (max-width: 1100px){
        width: 100%;
        height: auto;

        ul{
            flex-direction: row;
            justify-content: space-around;
        }
    }

`

export const ListItem = styled.li<{active: boolean}>`

    display: block;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    cursor: pointer;

    svg{
        fill: ${props => props.active ? "white" : colors.two};
    }

    :hover{
        svg{
            fill: white;
        }
    }

    @media only screen and (max-width: 1100px){
        height: 50px;
        line-height: 50px;
    }


`