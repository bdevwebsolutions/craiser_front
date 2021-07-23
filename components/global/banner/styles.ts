// STYLES FOR THE BANNER
import styled from 'styled-components';
import {colors} from '../../../styles/colors';

export const Container = styled.div`

    background: linear-gradient(90deg, ${colors.one} 0%, ${colors.two} 100%) ;
    height: 60px;
    line-height: 60px;

    display: grid;
    grid-template-columns: 200px 1fr auto auto;
    grid-gap: 15px;
    overflow: hidden;

    @media only screen and (max-width: 850px){
        height: auto;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        
    }

`