import React from 'react'
import Web3 from 'web3'
import { UserContext, userObject } from '../../../../../context/userContext';
import {deployContract, FundraiserData} from '../../../../../lib/contract/contract';
import {useForm} from 'react-hook-form';
import {ContractForm} from './form/contractForm';
import { formatDate } from '../../../../../util/dateFormat';

/** 
--- SETUP AND DEPLOY FOR THE SMART COTNRACT ---

    @param: Provider: web3 provider to get and deploy the contract
    @param: Data: userdata includes the users walletAddres
    * TODO REFACTOR

-----------------------------------------------
*/



export const NewProjectPopup: React.FC<{provider: Web3, data: userObject}> = ({provider, data}) => {
    

    const [deployer, setDeployer] = React.useState(false);
    const [showForm, setShowForm] = React.useState(true);
    const [deploying, setDeploying] = React.useState(false);
    const [contractData, setContractData] = React.useState<Partial<FundraiserData>>({});
    const [deploymentDone, setDeploymentDone] = React.useState(false);
    const {setUserData} = React.useContext(UserContext);

    //DATE VALIDATION

    //FORM SUBMIT
    const onSubmit = async (formdata) => {

                
        let today = new Date().getTime() / 1000;
        let end = new Date(formdata.date).getTime() / 1000;

        let name = formdata.name;
        let description = formdata.description;
        let organization = formdata.organization;
        let deadline = Math.round(end - today);
        let minimumContribution = 0;
        let goal = parseFloat(formdata.goal)

        setContractData({name, description, organization, form: {deadline, goal, minimumContribution, initialPaymentDuration: 0}});
        setShowForm(false);
        setDeployer(true)

    }


    //HANDLE CONTRACT DEPLOYEMENT
    const handleDeployment = async () => {

        setDeployer(false);
        setDeploying(true);

        let RESULT: userObject | boolean = await deployContract(
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
        )

        if(RESULT){
            setDeploying(false)
            setDeploymentDone(true);
            //@ts-ignore
            setUserData(RESULT)
        }


    }


    return (
    <div>
        {showForm ? <><h4>NEW FUNDRAISER</h4><ContractForm onSubmit={onSubmit}/></> : null}
        {deployer ? <><h4>CONTRACT READY TO BE DEPLOYED</h4><button onClick={handleDeployment}>DEPLOY CONTRACT</button></> : null}
        {deploying ? <><h4>CONTRACT IS BEING DEPLOYED</h4><p>This can take a minute based on your gas fee</p></>: null}
        {deploymentDone ? <><h4>YOUR FUNDRAISER IS DEPLOYED</h4><p>You can now view it in your dashboard</p></> : null}
    </div>
    )
}

