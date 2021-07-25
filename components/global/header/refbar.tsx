/*

    - REFBAR COMPONENT

    This component reroutes to a dynamic generated page with url /fundraiser/:id
    the id given is a fundraising id that is generated when a new fundraiser is launched.

*/


//
import React from 'react'
import styled from 'styled-components';


import {colors, highlights} from '../../../styles/colors';
//router hook
import {useRouter} from 'next/router';



const Refbar: React.FC = () => {

    const [id, setId] = React.useState("");
    const router = useRouter()

    const routeByReference = () => {
        if(id !== ""){
            router.push(`/project/${encodeURIComponent(id)}`)
        }
    }

    return (
        <Container>
            <Input onChange={(e) => {setId(e.target.value)}} placeholder="find by contract address"></Input>
            <Button onClick={() => {routeByReference()}}>search</Button>
        </Container>
    )
}


// STYLES FOR THE REFBAR


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
    grid-gap: 5px;
    width: 450px;

    @media only screen and (max-width: 1050px){
        width: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        min-width: 0px !important;
        grid-column: 1 / 3;
    }

`

const Button = styled.button`

    height: 40px;
    margin-top: 10px;
    color: white;
    border: none;
    background-color: ${colors.one};
    line-height: 37px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    border: solid 2px ${colors.three};
    text-transform: uppercase;
    cursor: pointer;


    :hover{
        border-radius: 0;
        border: solid 2px ${highlights.seven};
    }
`


const Input = styled.input`
    height: 40px;
    margin-top: 10px;
    color: white;
    border: none;
    background-color: ${colors.three};
    padding-left: 15px;
    text-transform: lowercase;

    ::placeholder{
        color: white;
        font-weight: bold;
        font-size: 12px;
    }

    :focus{
        outline: none;
        border: solid 2px ${highlights.seven};
    }

`

export default Refbar;