//FORM
import React from 'react'
import Link from 'next/link';
import {ContractForm} from './form/contractForm';
import { H4, Paragraph } from '../../../../global/markup';

export const New: React.FC<{onSubmit: Function}> = ({onSubmit}) => {

    const [toggle, setToggle] = React.useState(false);

    return (
        <>
            <H4>NEW FUNDRAISER</H4>
            {!toggle ? 
            <>
                <Paragraph>
                    <p>Read our <Link href="/about">learn more</Link> section first before deploying a contract. I've read and understand <br></br>how the contract works.</p>
                    <p>I accept the 1% dev fee included in the contract.</p>
                </Paragraph>
                <input onChange={e => {setToggle(e.target.checked)}} type="checkbox"/>
            </>
            : null}
            {toggle ? <ContractForm onSubmit={onSubmit}/>: null }
        </>
    )
}

export const Ready: React.FC<{handleDeployment: React.MouseEventHandler<HTMLButtonElement>}> = ({handleDeployment}) => {
    return (
        <>
            <H4>CONTRACT READY TO BE DEPLOYED</H4>
            <p>Remember that our contract implements a 1% dev fee.</p>
            <button onClick={handleDeployment}>DEPLOY CONTRACT</button>
        </>
    )
}

export const Deploying: React.FC = () => {
    return (
        <>
            <H4>CONTRACT IS BEING DEPLOYED</H4>
            <p>A confirmation prompt wil be shown on your connected wallet, wait till this window disappears.</p>
        </>
    )
}

export const Done: React.FC = () => {
    return (
        <>
            <H4>YOUR FUNDRAISER IS DEPLOYED</H4>
            <p>You can now view it in your dashboard</p>
        </>
    )
}

export const Error: React.FC<{error: string}> = ({error}) => {
    return (
        <>
            <H4>AN ERROR OCCURED</H4>
            <p>{error}, try again later.</p>
        </>
    )
}