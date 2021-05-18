import React from 'react'
import styled from 'styled-components';
import { colors } from '../../styles/colors';



export const Refbar: React.FC = () => {

    const [id, setId] = React.useState("");


    return (
        <Container>
            <Input placeholder="find by reference"></Input>
            <Button>search</Button>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    grid-gap: 5px;
    min-width: 450px;
    width: 450px;

`

const Button = styled.button`

    height: 40px;
    margin-top: 10px;
    color: white;
    border: none;
    background-color: ${colors.one};
    border-radius: 5px;
    line-height: 37px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    border: solid 2px ${colors.three};
    text-transform: uppercase;
    cursor: pointer;


    :hover{
        border-radius: 0;
    }
`


const Input = styled.input`
    height: 40px;
    margin-top: 10px;
    color: white;
    border: none;
    background-color: ${colors.three};
    border-radius: 5px;
    padding-left: 15px;
    text-transform: lowercase;

    ::placeholder{
        color: white;
        font-weight: bold;
        font-size: 12px;
    }

`