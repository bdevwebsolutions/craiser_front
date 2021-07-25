import React from 'react'
import styled from 'styled-components';
import { colors, highlights } from '../../../styles/colors';


//REUSABLE MARKUP


//HEADERS
export const H2 = styled.h2`
    font-size: 18px;
    padding-bottom: 5px;
`

export const H3 = styled.h3`
    font-size: 16px;
    padding-bottom: 5px;
`

export const H4 = styled.h4`
    font-size: 15px;
    padding-bottom: 5px;
`

//TEXTMARKUP
export const Span = styled.span`
    color: ${highlights.seven};
`

//SPACING
export const Paragraph = styled.p`
    font-size: 15px;
    margin-bottom: 15px;
`

export const Textblock = styled.div`
    margin-bottom: 15px;
    padding: 15px;
`

//CONTAINERS
export const TextContainer = styled.div`
    margin: 0px auto;
    max-width: 1200px;
    width: 100%;
    padding-top: 35px;
`

export const TitleContainer = styled.div`
    border-bottom: solid 1px ${highlights.seven};
    margin-bottom: 15px;
`

