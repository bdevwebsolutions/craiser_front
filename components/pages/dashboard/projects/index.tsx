/*

    PROJECTS PAGE IN THE DASHBOARD

*/

// GET ALL ACTIVE PROJECTS FROM CONNECTED USER

import React from 'react'
import { ProviderContext } from '../../../../context/global/providerContext';
import { UserContext, userObject } from '../../../../context/global/userContext';
import { TitleContainer, H2 } from '../../../global/markup';
import { StyledPopup } from './newProjectPopup/styles';
import { NewProjectPopup } from './newProjectPopup/popup';
import { DashboardContent } from '../../../global/dashboard/styles';



const Projects: React.FC<{data: userObject}> = ({data}) => {

    const [projectList, setProjectList] = React.useState([])
    const {provider} = React.useContext(ProviderContext);
    const {userData} = React.useContext(UserContext);
    const [mobile, setMobile] = React.useState(() => {
        if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return false;
        } else {
            return true;
        }
    })

    React.useEffect(() => {
        if(data.projects !== undefined){
            let allProjects = data.projects.map(el => {
                return el;
            })
            setProjectList(allProjects)
        }
    }, [userData])


    return (
        <DashboardContent>
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
            { mobile ? (
                <StyledPopup
                    trigger={<button> CREATE NEW </button>}
                    modal
                    closeOnDocumentClick
                    >
                    <NewProjectPopup data={userData} provider={provider}/>
                </StyledPopup>
                ) : null
            }
        </DashboardContent>
    )
}




export default Projects;