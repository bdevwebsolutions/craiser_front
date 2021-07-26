/*

    PROJECTS PAGE IN THE DASHBOARD

*/

// GET ALL ACTIVE PROJECTS FROM CONNECTED USER

import React from 'react'
import { ProviderContext } from '../../../../context/global/providerContext';
import { UserContext, userObject } from '../../../../context/global/userContext';
import { TitleContainer, H2, Paragraph, Span } from '../../../global/markup';
import { StyledPopup } from './newProjectPopup/styles';
import { NewProjectPopup } from './newProjectPopup/popup';
import { DashboardContent } from '../../../global/dashboard/styles';
import styled from 'styled-components';
import { colors, highlights } from '../../../../styles/colors';
import Web3 from 'web3';
import { ContractDetails, getContractDetailsDeployer } from '../../../../lib/contract/fundraising/getFundraiserContract';
import { LoadingPopup } from '../../../global/loader';
import { useRouter } from 'next/router';



const Projects: React.FC = () => {

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
                <H2>PROJECTS</H2>
            </TitleContainer>
            { mobile ? (
                <StyledPopup
                    trigger={<NewButton> CREATE NEW </NewButton>}
                    modal
                    closeOnDocumentClick
                    >
                    <NewProjectPopup data={userData} provider={provider}/>
                </StyledPopup>
                ) 
            : 
                <Paragraph><Span>New projects can only be created on a desktop environment</Span></Paragraph>
            }
            { 
                userData && userData.projects !== undefined ? 
                    <ListContainer>
                        {userData.projects.map(el => {return <List address={el} provider={provider}/>})}
                    </ListContainer>
                : null
            }
        </DashboardContent>
    )
}


const List: React.FC<{address: string, provider: Web3}> = ({address, provider}) => {

    const [details, setDetails] = React.useState<ContractDetails>();
    const router = useRouter();

    const getContractData = async () => {
        let res = await getContractDetailsDeployer(address, provider)
        setDetails(res);
    }
    
    getContractData();

    return (
    <ListItem onClick={() => {router.push(`project/${encodeURIComponent(address)}`)}}>
        {details ? (
            <>
                <Paragraph><Span>GOAL: </Span>{details.GOAL}</Paragraph>
                <Paragraph><Span>AMOUNT RAISED: </Span>{details.AMOUNT_RAISED}</Paragraph>
                <Paragraph><Span>PROGRESS: </Span>{details.PROGRESS}</Paragraph>
                <Paragraph><Span>TOTAL AMOUNT OF CONTRIBUTORS: </Span>{details.TOTAL_CONTRIBUTORS}</Paragraph>
            </>
        ) : <LoadingPopup/>}
    </ListItem>
    )
}

const ListContainer = styled.ul`

    padding: 0px;

`


const ListItem = styled.li`
    list-style-type: none;
    background-color: ${colors.two};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: auto;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 15px;

    :hover{
        font-weight: bold;
    }
    p{
        margin: 0px !important;
    }

    @media only screen and (max-width: 1440px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }


    word-break: normal;
`

const NewButton = styled.button`
    display: block;
    width: 100%;
    color: white;
    background-color: ${highlights.seven};
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 0px;
    margin-bottom: 35px;
    max-width: 120px;
`





export default Projects;