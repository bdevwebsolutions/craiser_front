import styled from 'styled-components';
import {colors} from '../../../styles/colors';

export const P = styled.p`
    font-weight: bold;
    cursor: pointer;
    text-align: right;
    padding-right: 5px;
`

export const Container = styled.div`

`

export const ConnectionType = styled.div`
    *{
        display: inline;
    }

    display: grid;
    grid-template-columns: 1fr auto;
    padding: 0px 15px;
    background-color: ${colors.two};
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
        background-color: ${colors.three};
    }
`