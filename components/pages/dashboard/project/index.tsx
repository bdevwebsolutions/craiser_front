/*

    PROJECTS PAGE IN THE DASHBOARD

*/

// GET ALL ACTIVE PROJECTS FROM CONNECTED USER

import React from 'react'
import { ProviderContext } from '../../../../context/global/providerContext';
import { UserContext,} from '../../../../context/global/userContext';
import { TitleContainer, H2} from '../../../global/markup';
import { DashboardContent } from '../../../global/dashboard/styles';




const Project: React.FC = () => {

    const {provider} = React.useContext(ProviderContext);
    const {userData} = React.useContext(UserContext);
    const [mobile, setMobile] = React.useState(false)

    //DISABLE NEW BUTTON ON SMALL SCREEN
    React.useEffect(() => {
        window && window.innerWidth > 700 ? setMobile(true) : setMobile(false);
    }, [])


    return (
        <DashboardContent>
            <TitleContainer>
                <H2>PROJECT 21546486</H2>
            </TitleContainer>
        </DashboardContent>
    )
}



export default Project;