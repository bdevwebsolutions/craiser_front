import React from 'react'
import {FaUserAlt} from 'react-icons/fa'

//ROUTING
import Link from 'next/link';

//components
import {Nav} from './nav';
import { Container, Profile } from './styles';
import { ConnectionContext } from '../../context/connectionContext';
import { useRouter } from 'next/router';

const Explorer = () => {

    const {isConnected} = React.useContext(ConnectionContext);
    const router = useRouter();

    return (
        <Container>
            <Nav/>
            <Profile disabled={!isConnected}><sub><Link href={isConnected ? "/profile" : router.route}>PROFILE </Link><Link href="/profile"><a><FaUserAlt/></a></Link></sub></Profile>
        </Container>
    )
}




export default Explorer;