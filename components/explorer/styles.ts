import styled from 'styled-components';
import {colors} from '../../styles/colors';

export const Container = styled.div`

    background-color: ${colors.one};
    height: 40px;
    width: 100%;
    padding: 0px 15px 0px 15px;

    display: grid;
    grid-template-columns: 330px auto;


    border-bottom: solid 2px ${colors.three};

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
                fill: ${props => props.disabled ? "grey" : colors.seven};
            }
        }
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
`

export const ListItem = styled.li`
    flex-grow: 1;
    font-size: 13px;
    :hover{
        font-weight: bold;
        svg{
            fill: ${colors.seven};
        }
    }

    cursor: pointer;
    width: 110px;


`