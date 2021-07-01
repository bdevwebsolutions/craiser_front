import React from 'react'
import Web3 from 'web3'

//CONTEXT
import { UserContext, userObject } from '../../../../../../../../context/global/userContext';

//LIB
import {deployContract, FundraiserData} from '../../../../../../../../lib/contract/fundraising/deployFundraiser';

//POPUPSTATES
import { New, Ready, Deploying, Done, Error } from './popupStates';

//FUNCTIONS
import { formatFormData } from './functions';


/** 
--- SETUP AND DEPLOY FOR THE SMART COTNRACT -----------------------

    @param: Provider: web3 provider to get and deploy the contract
    @param: Data: userdata includes the users walletAddres
    * TODO REFACTOR

-------------------------------------------------------------------
*/

// TYPES
export type FormData = {
    name: string,
    description: string,
    organization: string,
    date: string,
    goal: string,
}



//POPUP
export const NewProjectPopup: React.FC<{provider: Web3, data: userObject}> = ({provider, data}) => {
    
    const [contractData, setContractData] = React.useState<Partial<FundraiserData>>({});
    const {setUserData} = React.useContext(UserContext);
    const [deploymentError, setDeploymentError] = React.useState<string>("")

    //FORM SUBMIT
    const onSubmit = async (formdata: FormData) => {

        //TODO FIX THE INITIAL PAYEMENT DURATION
        console.log(formdata);
        //Format the formdata as FundraiserData
        let {name, description, organization, deadline, minimumContribution, goal} = formatFormData(formdata);

        //Set contractdata to state
        setContractData({
            name, 
            description, 
            organization, 
            form: {
                deadline, 
                goal, 
                minimumContribution, 
                initialPaymentDuration: 0
            }
        });

        //NEXT VIEW IN POPUP
        setCurrentView(currentView + 1)

    }

    //HANDLE CONTRACT DEPLOYEMENT
    const handleDeployment = async () => {

        //NEXT VIEW IN POPUP
        setCurrentView(currentView + 1)

        let RESULT: userObject | void = await deployContract(
            provider, 
            data, 
            {
                name: contractData.name, 
                description: contractData.description, 
                organization: contractData.organization, 
                form: {
                    deadline: contractData.form.deadline, 
                    goal: contractData.form.goal, 
                    initialPaymentDuration: contractData.form.initialPaymentDuration, 
                    minimumContribution: contractData.form.minimumContribution,
                }
            }
        ).then(res => {
            return res;
        }).catch(err => {
            //CONTRACT DEPLOYMENT ERROR HANDLING
            setDeploymentError(err.message)
            setCurrentView(4)
        })

        if(RESULT){
            //NEXT VIEW IN POPUP
            setCurrentView(currentView + 2)
            //@ts-ignore
            setUserData(RESULT)
        }

    }

    //POPUP VIEWS - 4 = ERROR
    const [currentView, setCurrentView] = React.useState<number>(0)
    const VIEWS: Array<React.ReactNode> = [
        <New onSubmit={onSubmit}/>, 
        <Ready handleDeployment={handleDeployment}/>, 
        <Deploying/>, 
        <Done/>,
        <Error error={deploymentError}/>
    ] 

    return (
        <div>
            {VIEWS[currentView]}          
        </div>
    )
}
