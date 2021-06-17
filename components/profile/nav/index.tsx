import React from 'react'
import {Props as RouteProps} from '../../../context/component/profileRouterContext';
import { Container, ListItem } from './styles';
import {AiOutlineFundProjectionScreen, AiOutlineLink, AiOutlineProject} from 'react-icons/ai'

export const Nav: React.FC<RouteProps> = ({route, setRoute}) => {

    return (
    <Container>
        <ul>
            <ListItem onClick={() => {setRoute("connection")}} active={route === "connection" ? true : false}><AiOutlineLink/></ListItem>
            <ListItem onClick={() => {setRoute("projects")}} active={route === "projects" ? true : false}><AiOutlineFundProjectionScreen/></ListItem>
            <ListItem onClick={() => {setRoute("funding")}} active={route === "funding" ? true : false}><AiOutlineProject/></ListItem>
        </ul>
    </Container>
    )
}