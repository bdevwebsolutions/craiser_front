import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const Container = styled.div`

    width: 100%;
    height: 100%;
    padding: 15px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 15px;

    @media only screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        grid-template-rows: 200px 1fr;
        padding: 0px;
    }
`
