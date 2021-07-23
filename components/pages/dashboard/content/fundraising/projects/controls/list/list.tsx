import React, { Dispatch } from 'react'
import { ProviderContext } from '../../../../../../../../context/global/providerContext';
import { UserContext, userObject } from '../../../../../../../../context/global/userContext';
import { NewProjectPopup } from '../popup/popup';
import {ListContainer} from './styles';
import {StyledPopup} from '../popup/styles';

export const List: React.FC<{data: userObject, selectProject: Dispatch<string>}> = ({data, selectProject}) => {
    
    const [projectList, setProjectList] = React.useState([])
    const {provider} = React.useContext(ProviderContext);
    const {userData} = React.useContext(UserContext);

    React.useEffect(() => {
        if(data.projects !== undefined){
            let allProjects = data.projects.map(el => {
                return <li tabIndex={el} onClick={() => {selectProject(el)}} key={el}>{el}</li>
            })
            setProjectList(allProjects)
        }
        else null;
    }, [userData])
    
    return (
        <ListContainer>
            <StyledPopup
                trigger={<button> CREATE NEW </button>}
                modal
                closeOnDocumentClick
                >
                <NewProjectPopup data={userData} provider={provider}/>
            </StyledPopup>
            {projectList.length <= 0 ? <p>you have no active projects</p> : <ul>{projectList}</ul>}
        </ListContainer>
    )
}