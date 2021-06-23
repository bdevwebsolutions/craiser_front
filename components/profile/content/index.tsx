import React from 'react'
import {Route} from '../../../context/component/profileRouterContext';
import { userObject } from '../../../context/userContext';
import Funding from './funding';
import Projects from './projects';
import { Container, TitleBar } from './styles';

export const Content: React.FC<{route: Route, data: userObject}> = ({route, data}) => {



    return (
        <Container>
            <TitleBar>
            <p>{route.toUpperCase()}</p>
            <p>connected wallet: {data.walletAddress}</p>
            </TitleBar>
            {route === "projects" ? <Projects data={{...data}}/> : <Funding data={{...data}}/>}
        </Container>
    )

}