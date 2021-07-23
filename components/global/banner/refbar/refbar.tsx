/*

    - REFBAR COMPONENT

    This component reroutes to a dynamic generated page with url /fundraiser/:id
    the id given is a fundraising id that is generated when a new fundraiser is launched.

*/


//
import React from 'react'

//styled-components
import {Container, Input, Button} from './styles';

//router hook
import {useRouter} from 'next/router';



export const Refbar: React.FC = () => {

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
