import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 100%;
    padding: 5px;
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;
    
    div:first-of-type{
        align-self: center;
    }

    @media only screen and (max-width: 1100px){
        grid-template-rows: 50px 1fr;
        grid-template-columns: 1fr;

        div:first-of-type{
            align-self: center;
            margin: 0px auto;
        }
    }

`