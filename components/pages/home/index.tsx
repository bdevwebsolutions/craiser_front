import Link from 'next/link'
import React from 'react'

//STYLES
import styled from 'styled-components';
import { colors, highlights } from '../../../styles/colors';



export const HomeScreen: React.FC = () => {
    return (
    <Container>
        <Start>
            <div>
                <h3>CONNECT YOUR WALLET TO CONTINUE OR FIND A FUNDRAISER BY ADDRESS.</h3>
            </div>
            <div>
                <p><Link href="/about">READ MORE ABOUT THE CRAISER_. DAPP</Link></p>
            </div>
        </Start>
    </Container>
    )
}


export const Container = styled.div`
    margin: 0px auto;
    max-width: 1200px;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    span{
        color: ${highlights.seven};
    }

`

export const Title = styled.div`

    h2{
        font-size: 18px;
        border-bottom: solid 1px ${highlights.seven};
        padding-bottom: 5px;
    }
    margin-bottom: 15px;
`

export const Start = styled.div`
    display: grid;


    div{
        background-color: ${colors.one};
        display: block;
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    div:nth-of-type(2){
        margin-top: 10px;
        p{
            color: ${colors.three};
            :hover{
                color: ${highlights.seven};
            }
        }
        

    }


`