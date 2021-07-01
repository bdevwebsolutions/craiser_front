//FORM
import React from 'react'
import Link from 'next/link';
import {ContractForm} from './form/contractForm';

export const New: React.FC<{onSubmit: Function}> = ({onSubmit}) => {

    const [toggle, setToggle] = React.useState(false);

    return (
        <>
            <h4>NEW FUNDRAISER</h4>
            <p>Read our <Link href="/about">learn more</Link> section first before deploying a contract.</p>
            <input onChange={e => {setToggle(e.target.checked)}} type="checkbox"/> I've read and understand how to contract works.
            {toggle ? <ContractForm onSubmit={onSubmit}/>: null }
        </>
    )
}

export const Ready: React.FC<{handleDeployment: React.MouseEventHandler<HTMLButtonElement>}> = ({handleDeployment}) => {
    return (
        <>
            <h4>CONTRACT READY TO BE DEPLOYED</h4>
            <p>Remember that our contract implements a 1% dev fee.</p>
            <button onClick={handleDeployment}>DEPLOY CONTRACT</button>
        </>
    )
}

export const Deploying: React.FC = () => {
    return (
        <>
            <h4>CONTRACT IS BEING DEPLOYED</h4>
            <p>A confirmation prompt wil be shown on your connected wallet</p>
        </>
    )
}

export const Done: React.FC = () => {
    return (
        <>
            <h4>YOUR FUNDRAISER IS DEPLOYED</h4>
            <p>You can now view it in your dashboard</p>
        </>
    )
}

export const Error: React.FC<{error: string}> = ({error}) => {
    return (
        <>
            <h4>AN ERROR OCCURED</h4>
            <p>{error}, try again later.</p>
        </>
    )
}