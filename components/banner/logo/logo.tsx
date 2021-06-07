/*

    - LOGO IN BANNER (ALSO LINK TO "/")

*/

//
import Link from 'next/link';
import React from 'react'

//Styled components
import {Header} from './styles';

//Hooks
import {useTooltip} from '../../../hooks/useTooltip';

export const Logo: React.FC = () => {

    const titleRef = React.useRef(null);
    const [active, setActive] = React.useState<boolean>(false);
    const tooltip = useTooltip({description: "A Web3 based fundraising platform, powered by ERC-20 Tokens.", ref: titleRef.current, active})

    return (
    <Header onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} ref={titleRef} >
        {tooltip}
        <Link href="/">CRAISER_.</Link>
    </Header>
    )
}

