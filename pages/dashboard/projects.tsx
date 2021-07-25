import React from 'react'
import HtmlHead from '../../components/global/htmlHead';
import WithConnection from '../../components/hoc/WithConnection';
import { Nav } from '../../components/pages/dashboard/global/nav';
import { DashboardContainer } from '../../components/global/dashboard/styles';
import { UserContext, userObject } from '../../context/global/userContext';
import { Bottom, Container } from '../../styles/pageStyles';
import Header from '../../components/global/header';

import Projects from '../../components/pages/dashboard/projects';


const MyProject: React.FC = () => {

    const {userData} = React.useContext(UserContext);

    return (
        <>
            <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
            <Container>
                <Header/>
                <DashboardContainer>
                    <Nav/>
                    <Projects data={{...userData}}/>
                </DashboardContainer>
                <Bottom>___</Bottom>
            </Container>
        </>
    )
}


export default WithConnection(MyProject);