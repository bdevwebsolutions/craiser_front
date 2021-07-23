import React from 'react';
import { Header, HtmlHead } from '../../components/global';

//styled-components
import {Bottom, Container} from '../../styles/pageStyles'
import { UserContext } from '../../context/global/userContext';
import WithConnection from '../../components/hoc/WithConnection';
import { DashboardContainer } from '../../components/pages/dashboard/styles';
import { Nav } from '../../components/pages/dashboard/global/nav';
import { DashboardHome } from '../../components/pages/dashboard/content/home';


 
const Profile: React.FC = () => {

  const {userData} = React.useContext(UserContext);

  return (
    <>
      <HtmlHead description="CRAISER - A multi purpose smart contract dapp" title="CRAISER" />
      <Container>
        <Header/>
        <DashboardContainer>
          <Nav/>
          <DashboardHome/>
        </DashboardContainer>
        <Bottom>___</Bottom>
      </Container>
    </>
  )
}


export default WithConnection(Profile);


