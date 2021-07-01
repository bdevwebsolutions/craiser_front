import React from 'react'

//CONTEXT
import { userObject } from '../../../../../../context/global/userContext'

//COMPONENTS
import { Details } from './controls/details/details';
import { List } from './controls/list/list';

//STYLING
import { Container } from './styles';


/** 
--- INDEX PAGE FOR THE PROJECT SUBROUTE OF PROFILE-----------------------

    @param: data => userObject passed by parentcontext
    * *LIST => List element that displays all projects a user ever started
    * *DETAILS => Detailed information about a specific project

-------------------------------------------------------------------
*/


const ProjectsContent: React.FC<{data: userObject}> = ({data}) => {

    const [selectedProject, setSelectedProject] = React.useState<string>("")

    return (
        <Container>
            <List selectProject={setSelectedProject} data={{...data}}/>
            <Details active={selectedProject}/>
        </Container>
    )
}

export default ProjectsContent;