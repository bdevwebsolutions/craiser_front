import React from 'react'
import {Route} from '../../../context/component/profileRouterContext';
import { userObject } from '../../../context/userContext';
import { Container, TitleBar } from './styles';

export const Content: React.FC<{route: Route, data: userObject}> = ({route, data}) => {



    return (
        <Container>
            <TitleBar>
                <p>{route}</p>
            </TitleBar>
        </Container>
    )

}