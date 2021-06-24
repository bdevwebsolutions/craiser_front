import { colors, highlights } from "../../../../../../styles/colors"
import styled from 'styled-components';

//DETAILS
export const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
    div{
        height: 100%;
        width: 100%;
        background-color: ${colors.two};
        padding: 15px;

        h3{
            opacity: 0.5;
        }

        p{
            opacity: 0.8;
            font-size: 13px;
        }

        h4{
            font-size: 15px;
            
        }
        box-sizing: border-box;
        :hover{
            border: solid 1px ${highlights.seven};
            padding: 14px;
        }
    }


    @media only screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, min(200px));
    }
`

export const Funds = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;


    @media only screen and (max-width: 1100px){
        grid-column: 1/1;
        grid-row: 1/2;
    }
`

export const Contributers = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;

    @media only screen and (max-width: 1100px){
        grid-column: 1/1;
        grid-row: 2/3;
    }
`

export const Time = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;

    @media only screen and (max-width: 1100px){
        grid-column: 1/1;
        grid-row: 3/4;
    }
`
export const Approval = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
    @media only screen and (max-width: 1100px){
        grid-column: 1/1;
        grid-row: 4/5;
    }
`

export const Description = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
    @media only screen and (max-width: 1100px){
        grid-column: 1/1;
        grid-row: 5/6;
    }
`

export const Center = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
`