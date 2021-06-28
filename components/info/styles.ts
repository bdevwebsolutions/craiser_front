import styled from 'styled-components';
import { colors, highlights } from '../../styles/colors';


export const Container = styled.div`
    margin: 0px auto;
    max-width: 1200px;
    width: 100%;
    padding-top: 35px;

    span{
        color: ${highlights.seven};
    }

`

export const Title = styled.div`

    h2{
        font-size: 18px;
        border-bottom: solid 1px ${highlights.seven};
        padding-bottom: 5px;
    }
    margin-bottom: 15px;
`

export const Description = styled.div`
    h3{
        font-size: 16px;
    }

    p{
        padding: 15px;
        font-size: 14px;
        margin-bottom: 5px;
    }
`