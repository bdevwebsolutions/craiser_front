import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Container = styled.div`

    text-align: center;
    display: grid;
    grid-template-rows: 18px 1fr;

`

export const TitleBar = styled.div`
    width: 100%;
    line-height: 18px;

    p{
        text-align: center;
        display: block;
        width: 100%;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
    }
`