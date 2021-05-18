import React from 'react'
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import {ConnectionContext} from '../../context/connectionContext';
import {FaUserAlt} from 'react-icons/fa'

//components
import {Nav} from './nav';

const Explorer = () => {

    const {connectionState} = React.useContext(ConnectionContext);

    return (
        <Container>
            <Nav/>
            <Profile disabled={Object.keys(connectionState).length === 0 ? true : false}><sub>PROFILE <FaUserAlt/></sub></Profile>
        </Container>
    )
}


const Container = styled.div`

    background-color: ${colors.one};
    height: 40px;
    width: 100%;
    padding: 0px 15px 0px 15px;

    display: grid;
    grid-template-columns: 330px auto;


    border-bottom: solid 2px ${colors.three};

`

const Profile = styled.p<{disabled: boolean}>`

    text-align: right;

    width: auto;



    sub{
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
        color: ${props => props.disabled ? "grey" : "white"};

        svg{
            fill: ${props => props.disabled ? "grey" : "white"};
        }

        :hover{
            font-weight: ${props => props.disabled ? "normal" : "bold"};

            svg{
                fill: ${props => props.disabled ? "grey" : colors.seven};
            }
        }
    }

`

export default Explorer;