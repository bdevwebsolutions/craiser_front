import React from 'react'
import { userObject } from '../../../../context/userContext'
import { Details } from './controls/details';
import { List } from './controls/list';
import { Container } from './styles';


const Projects: React.FC<{data: userObject}> = ({data}) => {

    const [selectedProject, setSelectedProject] = React.useState<string>("")

    return (
        <Container>
            <List selectProject={setSelectedProject} data={{...data}}/>
            <Details active={selectedProject}/>
        </Container>
    )
}

export default Projects;