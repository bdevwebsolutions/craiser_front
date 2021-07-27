import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';


import {FaQuestion, FaUserAlt} from 'react-icons/fa'
import { highlights} from '../../../styles/colors';
import { ConnectionContext } from '../../../context/global/connectionContext';
import { useRouter } from 'next/router';

const Explorer = () => {

    const {isConnected} = React.useContext(ConnectionContext);
    const router = useRouter();

    return (
        <Container>
            <Link href="/about"><ListItem disabled={false}><FaQuestion/></ListItem></Link>   
            <Link href={isConnected ? "/dashboard/projects" : router.route}><ListItem disabled={!isConnected}><FaUserAlt/></ListItem></Link>
        </Container>
    )
}




const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 120px;
    font-size: 18px;
    
    @media only screen and (max-width: 1050px){
       text-align: center;
       font-size: 18px;
       height: auto;
       padding: 5px 0px;
       line-height: 40px;
    }


`

export const ListItem = styled.div<{disabled: boolean}>`
    width: 100%;
    align-items: center;
    align-content: center;
    text-align: center;
    opacity: ${props => props.disabled ? 0.4 : 1};
    font-weight: normal;


    svg{
        line-height: 80px;
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

        :hover{
            fill: ${props => props.disabled ? null : highlights.seven};
        }
    }



`





export default Explorer;