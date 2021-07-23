import React from 'react'
import {FaQuestion, FaUserAlt} from 'react-icons/fa'
import Link from 'next/link';

//ROUTING

import { Container, ListItem } from './styles';
import { ConnectionContext } from '../../../../context/global/connectionContext';
import { useRouter } from 'next/router';

const Explorer = () => {

    const {isConnected} = React.useContext(ConnectionContext);
    const router = useRouter();

    return (
        <Container>
            <Link href="/about"><ListItem disabled={false}><FaQuestion/></ListItem></Link>   
            <Link href={isConnected ? "/dashboard" : router.route}><ListItem disabled={!isConnected}><FaUserAlt/></ListItem></Link>
        </Container>
    )
}






export default Explorer;