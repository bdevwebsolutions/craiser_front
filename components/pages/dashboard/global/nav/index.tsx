import React from 'react'
import { Container, ListItem} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ROUTES = [
    "/dashboard/fundraising/my-projects",
    "/dashboard/fundraising/funding",
    "/dashboard/fundraising/following"
]

export const Nav: React.FC = () => {

    const route = useRouter();

    return (
    <Container>
        <ul>
            <ListItem active={route.pathname === ROUTES[0] ? true : false}><Link href={ROUTES[0]}>My Projects</Link></ListItem>
            <ListItem active={route.pathname === ROUTES[1] ? true : false}><Link href={ROUTES[1]}>Funding</Link></ListItem>
            <ListItem active={route.pathname === ROUTES[2] ? true : false}><Link href={ROUTES[2]}>Following</Link></ListItem>
        </ul>
    </Container>
    )
}