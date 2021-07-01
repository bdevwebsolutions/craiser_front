import styled from 'styled-components';
import {colors, highlights} from '../../../styles/colors';

export const Container = styled.div`

    background-color: ${colors.one};
    height: 40px;
    width: 100%;
    padding: 0px 15px 0px 15px;

    display: grid;
    grid-template-columns: 85px auto;
    border-bottom: solid 2px ${highlights.seven};

    @media only screen and (max-width: 850px){
        grid-template-columns: 1fr auto;
        height: auto;
    }

`

export const Profile = styled.p<{disabled: boolean}>`

    text-align: right;

    width: auto;


    a {
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    }


    sub{
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
        color: ${props => props.disabled ? "grey" : "white"};

        svg{
            fill: ${props => props.disabled ? "grey" : "white"};
        }

        :hover{
            font-weight: ${props => props.disabled ? "normal" : "bold"};

            svg{
                fill: ${props => props.disabled ? "grey" : highlights.seven};
            }
        }
    }

    @media only screen and (max-width: 850px){
        text-align: left;
        margin-bottom: 15px;
    }

`

export const List = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 100%;
    line-height: 40px;
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;

    @media only screen and (max-width: 850px){
        width: auto;
        display: inline;
        text-align: left;
    }
`

export const ListItem = styled.li`
    text-align: left;
    font-size: 13px;
    padding-left: 18px;

        :hover{
            font-weight: bold;
            svg{
                fill: ${highlights.seven};
            }
        }
        cursor: pointer;


    width: 150px;

    @media only screen and (max-width: 850px){
        flex-grow: auto;
        display: inline-block;
        width: auto;
        margin-right: 15px;
    }


`