import React from 'react'
import { Header, HtmlHead } from '../../../components/global';
import WithConnection from '../../../components/hoc/WithConnection';
import FundingContent from '../../../components/pages/dashboard/content/fundraising/funding';
import { Nav } from '../../../components/pages/dashboard/global/nav';
import { DashboardContainer } from '../../../components/pages/dashboard/styles';
import { userObject } from '../../../context/global/userContext';
import { Bottom, Container } from '../../../styles/pageStyles';

const Funding: React.FC<{userData: userObject}> = ({userData}) => {


    return (
        <>
            <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
            <Container>
                <Header/>
                <DashboardContainer>
                    <Nav/>
                    <FundingContent data={{...userData}}/>
                </DashboardContainer>
                <Bottom>___</Bottom>
            </Container>
        </>
    )
}


export default WithConnection(Funding);