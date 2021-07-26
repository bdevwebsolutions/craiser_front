import React from 'react';
import HtmlHead from '../../components/global/htmlHead';

//styled-components
import {Bottom, Container} from '../../styles/pageStyles'
import { UserContext } from '../../context/global/userContext';
import WithConnection from '../../components/hoc/WithConnection';
import { DashboardContainer } from '../../components/global/dashboard/styles';
import { Nav } from '../../components/pages/dashboard/nav';
import { DashboardHome } from '../../components/pages/dashboard/content/home';
import Header from '../../components/global/header';
import Dashboard from '../../components/pages/dashboard';


 
const Profile: React.FC = () => {

  return (
    <>
      <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
      <Container>
        <Header/>
        <DashboardContainer>
          <Nav/>
          <Dashboard/>
        </DashboardContainer>
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}


export default WithConnection(Profile);


