import styled from 'styled-components';
import {colors} from '../../styles/colors';



export const Container = styled.div<{show: boolean}>`

    visibility: ${props => props.show ? "visible" : "hidden"};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.oneTransparant};
    z-index: 100;

    display: grid;
    justify-content: center;
    align-items: center;

`

export const Justify = styled.div`
    width: 500px;

    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 15px;

`

export const Close = styled.button`
    background-color: ${colors.two};
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius:5px;
    
    :hover{
        font-weight: bold;
    }
`

export const Content = styled.div`


`