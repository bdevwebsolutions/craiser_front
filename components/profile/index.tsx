import { useRouter } from 'next/router';
import React from 'react'
import { ProfileRouterContext } from '../../context/component/profileRouterContext';
import { userObject } from '../../context/userContext';
import { Content } from './content';
import { Nav } from './nav';
import { Container } from './styles';

/*

    -This component includes internal routing for 
        * connectiondetails
        * Own projects
        * Supporting Projects


*/

const ProfileContainer: React.FC<{userData: userObject}> = ({userData}) => {

    const {route, setRoute} = React.useContext(ProfileRouterContext);

    return (
        <Container>
            <Nav route={route} setRoute={setRoute}/>
            <Content data={{...userData}} route={route}/>
        </Container>
    )
}

export default ProfileContainer;