import React from 'react'
import { List, ListItem } from './styles';
import Link from 'next/link';

export const Nav = () => {
    return (
    <List>
        <Link href="/about"><a><ListItem>LEARN MORE</ListItem></a></Link>   
    </List>
    )
}

