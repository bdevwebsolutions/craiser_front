/*

    * INITIAL DASHBOARD ROUTE
    TODO: ADD ROUTING TO /PROJECTS AND /FUNDING

*/


import React from 'react'

//STYLING
import { H2, TitleContainer, H4, Textblock } from '../../global/markup';
import { DashboardContent } from "../../global/dashboard/styles";
import styled from 'styled-components';

//ROUTING
import Link from 'next/link';

//CONTEXT
import { UserContext } from '../../../context/global/userContext';
import { colors, highlights } from '../../../styles/colors';



const Dashboard: React.FC = () => {

    const {userData} = React.useContext(UserContext);

    return (
        <DashboardContent>
            <TitleContainer>
                <H2>DASHBOARD</H2>
                <p>Connected address: {userData ? userData.walletAddress : "loading"}</p>
            </TitleContainer>
            <Links>
                <Link href="/dashboard/projects">
                    PROJECTS
                </Link>
                <Link href="/dashboard/funding">
                    FUNDING
                </Link>
            </Links>
        </DashboardContent>    
    )
}


const Links = styled.div`
    a{
        
        display: block;
        max-width: 300px;
        padding: 15px;
        margin-bottom: 15px;
        border-left: solid 2px ${colors.two};

        :hover{
            background-color: ${highlights.seven};
            font-weight: bold;
            border-left: none;
        }
    }

`



export default Dashboard;