/*
    - LOGO IN BANNER (ALSO LINK TO "/")
*/
import Link from 'next/link';
import React from 'react'

//Styled components
import {Header} from './styles';

export const Logo: React.FC = () => <Header><Link href="/">CRAISER_.</Link></Header>

