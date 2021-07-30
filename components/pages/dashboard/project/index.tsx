/*

    PROJECTS PAGE IN THE DASHBOARD

*/

// GET ALL ACTIVE PROJECTS FROM CONNECTED USER

type dbData = {
    _id: string,
    contractAddress: string,
    title: string,
    organization: string,
}

import React from 'react'
import { ProviderContext } from '../../../../context/global/providerContext';
import { UserContext,} from '../../../../context/global/userContext';
import { TitleContainer, H2, Paragraph, Span} from '../../../global/markup';
import { DashboardContent } from '../../../global/dashboard/styles';
import { useRouter } from 'next/router';
import { ContractDetails, getContractDetailsDeployer } from '../../../../lib/contract/fundraising/getFundraiserContract';
import { LoadingPopup } from '../../../global/loader';




const Project: React.FC = () => {

    const {provider} = React.useContext(ProviderContext);
    const router = useRouter();
    const [details, setDetails] = React.useState<ContractDetails>()
    const [dbData, setdbData] = React.useState<dbData>();
    const [render, setRender] = React.useState<boolean>(false);

    const getContractData = async () => {
        //@ts-ignore
        let res = await getContractDetailsDeployer(router.query.address, provider)
        setDetails(res);

        let data = await fetch(`/api/contract/${router.query.address}`).then(res => {
            return res.json()
          });
          if(Object.keys(data).length !== 0){
            setdbData(data);
          } else {
            setdbData(null)
            router.push('/dashboard/projects')
          }
    }
    
    React.useEffect(() => {
        if(document){
            getContractData();
            setRender(true);
        }
    }, [])


    if(render){
        if(details && dbData && document){
            return(
                <DashboardContent>
                    <TitleContainer>
                        <H2>PROJECT {dbData.title}</H2>
                        <Paragraph><Span>ADDRESS: </Span>{router.query.address}</Paragraph>
                    </TitleContainer>
                </DashboardContent>
            )
        } else if (document){
            return(
                <DashboardContent>
                    <LoadingPopup/>
                </DashboardContent>
            )
        }
    } else {
        return null;
    }


}


export default Project;