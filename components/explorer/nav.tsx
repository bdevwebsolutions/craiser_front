import React from 'react'
import {AiFillFire, AiFillRocket} from 'react-icons/ai';
import {BiPlusMedical} from 'react-icons/bi';
import { List, ListItem } from './styles';
import Link from 'next/link';

export const Nav = () => {
    return (
    <List>
        <ListItem><Link href="/hot">HOT</Link><Link href="/hot"><a><AiFillFire/></a></Link></ListItem>
        <ListItem><Link href="/trending">TRENDING</Link><Link href="/trending"><a><AiFillRocket/></a></Link></ListItem>
        <ListItem><Link href="/new">NEW</Link><Link href="/new"><a><BiPlusMedical/></a></Link></ListItem>
    </List>
    )
}

