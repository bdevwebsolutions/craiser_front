import React from 'react'
import { Container, ListItem} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ROUTES = [
    "/dashboard/fundraising/my-projects",
    "/dashboard/fundraising/funding"
]

export const Nav: React.FC = () => {

    const route = useRouter();

    return (
    <Container>
        <h4>FUNDRAISING</h4>
        <ul>
            <ListItem active={route.pathname === ROUTES[0] ? true : false}><Link href={ROUTES[0]}>- my projects</Link></ListItem>
            <ListItem active={route.pathname === ROUTES[1] ? true : false}><Link href={ROUTES[1]}>- funding</Link></ListItem>
        </ul>
    </Container>
    )
}