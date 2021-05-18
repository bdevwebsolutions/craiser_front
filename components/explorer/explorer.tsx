import React from 'react'
import styled from 'styled-components';
import { colors } from '../../styles/colors';

//components
import {Nav} from './nav';

const Explorer = () => {
    return (
        <Container>
            <Nav/>
            <Profile disabled={false}><sub>PROFILE</sub></Profile>
        </Container>
    )
}


const Container = styled.div`

    background-color: ${colors.one};
    height: 40px;
    width: 100%;
    padding: 0px 35px 0px 15px;

    display: grid;
    grid-template-columns: 210px auto;


    border-bottom: solid 2px ${colors.three};

`

const Profile = styled.p<{disabled: boolean}>`

    text-align: right;

    width: auto;

    sub{
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

        :hover{
            font-weight: ${props => props.disabled ? "normal" : "bold"};
        }
    }

`

export default Explorer;