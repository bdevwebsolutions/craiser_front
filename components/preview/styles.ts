import styled from 'styled-components';
import { colors, highlights } from '../../styles/colors';


export const Container = styled.div`

    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
    height: auto;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px !important;
    grid-gap: 5px;

`

export const Project = styled.div`

    width: 100%;
    height: 200px;
    display: block;

    background-color: ${colors.two};
    padding: 5px;

    :hover{
        border: solid 1px ${highlights.seven};
        padding: 4px;
    }

`