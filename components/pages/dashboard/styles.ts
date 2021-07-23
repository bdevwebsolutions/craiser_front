import styled from 'styled-components';

export const DashboardContainer = styled.div`

    width: 100%;
    height: 100%;
    padding: 5px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    
    @media only screen and (max-width: 1100px){
        grid-template-rows: 50px 1fr;
        grid-template-columns: 1fr;

        div:first-of-type{
            align-self: center;
            margin: 0px auto;
        }
    }

`