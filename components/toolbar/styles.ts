import styled from 'styled-components';
import { colors } from '../../styles/colors';


export const Container = styled.div`

    height: 20px;
    width: 50px;
    background-color: ${colors.one};
    font-size: 18px;
    text-align: right;
    padding: 0px 15px;
    color: ${colors.eight};
    position: absolute;
    top: 15px;
    left: 0px;
    svg{
        fill: ${colors.five};
    }

    p{
        cursor: pointer;
        display: inline-block;
    }

    @media only screen and (max-width: 850px){
        display: none;
    }
`