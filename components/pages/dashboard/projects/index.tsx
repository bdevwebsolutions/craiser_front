/*

    PROJECTS PAGE IN THE DASHBOARD

*/

// GET ALL ACTIVE PROJECTS FROM CONNECTED USER

import React from 'react'
import { ProviderContext } from '../../../../context/global/providerContext';
import { UserContext, userObject } from '../../../../context/global/userContext';

import styled from 'styled-components';
import { TextContainer, TitleContainer, H2 } from '../../../global/markup';
import { StyledPopup } from './newProjectPopup/styles';
import { NewProjectPopup } from './newProjectPopup/popup';



const Projects: React.FC<{data: userObject}> = ({data}) => {

    const [projectList, setProjectList] = React.useState([])
    const {provider} = React.useContext(ProviderContext);
    const {userData} = React.useContext(UserContext);

    React.useEffect(() => {
        if(data.projects !== undefined){
            let allProjects = data.projects.map(el => {
                return el;
            })
            setProjectList(allProjects)
        }
    }, [userData])


    return (
        <TextContainer>
            <TitleContainer>
                <H2>PROJECTS</H2>
            </TitleContainer>
            { 
                projectList.length > 0 ?
                    <ul>
                        {projectList.map(el => {return <li>{el}</li>})}
                    </ul>
                : null
            }
            <StyledPopup
                trigger={<button> CREATE NEW </button>}
                modal
                closeOnDocumentClick
                >
                <NewProjectPopup data={userData} provider={provider}/>
            </StyledPopup>
        </TextContainer>
    )
}




export default Projects;