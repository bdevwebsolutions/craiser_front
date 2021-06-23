import React from 'react'
import {Props as RouteProps} from '../../../context/component/profileRouterContext';
import { Container, ListItem } from './styles';
import {AiOutlineFundProjectionScreen, AiOutlineLink, AiOutlineProject} from 'react-icons/ai'
import { useTooltip } from '../../../hooks/useTooltip';

export const Nav: React.FC<RouteProps> = ({route, setRoute}) => {

    //TOOLTIPS
    //ONE
    const [projectsActive, setProjectsActive] = React.useState(false)
    const projectsRef = React.useRef(null)
    const projectTooltip = useTooltip({description: "Projects", ref: projectsRef.current, active: projectsActive})
    //TWO
    const [fundingActive, setFundingActive] = React.useState(false)
    const fundingRef = React.useRef(null)
    const fundingTooltip = useTooltip({description: "Funding", ref: fundingRef.current, active: fundingActive})
    
    return (
    <Container>
        {projectTooltip}
        {fundingTooltip}
        <ul>
            <ListItem onMouseEnter={() => setProjectsActive(true)} onMouseLeave={() => setProjectsActive(false)} ref={projectsRef} onClick={() => {setRoute("projects")}} active={route === "projects" ? true : false}><AiOutlineFundProjectionScreen/></ListItem>
            <ListItem onMouseEnter={() => setFundingActive(true)} onMouseLeave={() => setFundingActive(false)} ref={fundingRef} onClick={() => {setRoute("funding")}} active={route === "funding" ? true : false}><AiOutlineProject/></ListItem>
        </ul>
    </Container>
    )
}