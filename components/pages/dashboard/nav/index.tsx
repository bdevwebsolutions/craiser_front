import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { colors, highlights } from '../../../../styles/colors';

const ROUTES = [
    "/dashboard/projects",
    "/dashboard/funding",
]

export const Nav: React.FC = () => {

    const route = useRouter();

    return (
    <Container>
        <ul>
            <ListItem active={route.pathname === ROUTES[0] ? true : false}><Link href={ROUTES[0]}>Projects</Link></ListItem>
            <ListItem active={route.pathname === ROUTES[1] ? true : false}><Link href={ROUTES[1]}>Funding</Link></ListItem>
        </ul>
    </Container>
    )
}


const Container = styled.div`

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



    @media only screen and (max-width: 1050px){
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

`

const ListItem = styled.li<{active: boolean}>`


    display: block;
    height: auto;
    width: 100%;
    font-size: 14px;
    cursor: pointer;
    padding: 5px 15px 5px 0px;
    text-transform: uppercase;
    margin-bottom: 25px;


    color: ${props => props.active ? highlights.seven : colors.seven};
    font-weight: ${props => props.active ? "bold" : "normal"};

    :hover{
        color: ${highlights.seven};
    }


    @media only screen and (max-width: 1100px){
        height: 30px;
        margin-bottom: 0px;
        border-left: none;
        text-align: center;
        font-weight: bold;
    }
    


`