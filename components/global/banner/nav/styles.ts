import styled from 'styled-components';
import {colors, highlights} from '../../../../styles/colors';

export const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 120px;
    font-size: 18px;
    


`

export const ListItem = styled.div<{disabled: boolean}>`
    width: 100%;
    align-items: center;
    align-content: center;
    text-align: center;
    opacity: ${props => props.disabled ? 0.4 : 1};
    font-weight: normal;


    svg{
        line-height: 80px;
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

        :hover{
            fill: ${props => props.disabled ? null : highlights.seven};
        }
    }



`