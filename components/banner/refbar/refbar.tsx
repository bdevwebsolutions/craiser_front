import React from 'react'
import {Container, Input, Button} from './styles';



export const Refbar: React.FC = () => {

    const [id, setId] = React.useState("");


    return (
        <Container>
            <Input placeholder="find by reference"></Input>
            <Button>search</Button>
        </Container>
    )
}
