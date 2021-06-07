import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import {TooltipContext} from '../context/tooltipContext';

type Props = {
    description: string,
    ref: HTMLElement,
    active: boolean,
    exception?: boolean,
}

type Return = {

}

export const useTooltip = (props: Props): Return =>  {
     
    const [tooltip, setTooltip] = React.useState<Partial<React.ReactNode>>()
    const {showToolTip} = React.useContext(TooltipContext);
    
    React.useEffect(() => {
        if(props.active){
            createToolTip()
        } else {
            setTooltip(null);
        }
    }, [props.active]);

    const createToolTip = () => {
        const bounds = props.ref.getBoundingClientRect()
        let top = bounds.top + document.documentElement.scrollTop;

        let left = bounds.left
        if(left + 150 > document.documentElement.clientWidth){
            left = left - 150;
        }

        console.log("top:" + bounds.top + "height window:" + window.innerHeight);

        let marginTop = props.ref.offsetHeight;
        let maxWidth = props.ref.offsetWidth;
        console.log(marginTop, maxWidth);
        setTooltip(<Tooltip  marginTop={marginTop} maxWidth={maxWidth} top={top} left={left}><p>{props.description}</p></Tooltip>)
    }

    if(showToolTip || props.exception){
        return tooltip;
    } else {
        return null;
    }

}


const Tooltip = styled.div<{top: number, left: number, marginTop: number, maxWidth: number}>`
    position: absolute;
    top: ${props => props.top + props.marginTop + "px"};
    left: ${props => props.left + "px"};
    max-width: 150px;
    text-align: left;
    box-shadow: 10px 10px 10px ${colors.one};
    border-radius: 5px;

    *{
        display: block;
        height: auto;
        margin: 0px !important;
        padding: 10px;
        line-height: 14px;
    }
    p{
        font-size: 12px;
        font-weight: bold;
    }

    background-color: ${colors.four};
`