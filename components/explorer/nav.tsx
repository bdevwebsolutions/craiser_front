import React from 'react'
import {AiFillFire, AiFillHome, AiFillInfoCircle, AiFillRocket} from 'react-icons/ai';
import {BiPlusMedical} from 'react-icons/bi';
import { List, ListItem } from './styles';
import Link from 'next/link';

export const Nav = () => {
    return (
    <List>
        <Link href="/info"><a><ListItem>INFO <AiFillInfoCircle/></ListItem></a></Link>
        {
        /*
        <Link href="/"><a><ListItem>HOME<AiFillHome/></ListItem></a></Link>
        <ListItem><Link href="/trending">TRENDING</Link><Link href="/trending"><a><AiFillRocket/></a></Link></ListItem>
        <ListItem><Link href="/new">NEW</Link><Link href="/new"><a><BiPlusMedical/></a></Link></ListItem>
        */
        }       
    </List>
    )
}

