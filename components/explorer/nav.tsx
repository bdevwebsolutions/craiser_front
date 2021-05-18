import React from 'react'
import styled from 'styled-components';
import {AiFillFire, AiFillRocket} from 'react-icons/ai';
import {BiPlusMedical} from 'react-icons/bi';
import { colors } from '../../styles/colors';

export const Nav = () => {
    return (
    <List>
        <ListItem>HOT <AiFillFire/></ListItem>
        <ListItem>TRENDING <AiFillRocket/></ListItem>
        <ListItem>NEW <BiPlusMedical/></ListItem>
    </List>
    )
}

const List = styled.ul`
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

const ListItem = styled.li`
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