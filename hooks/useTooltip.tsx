import React from 'react'
import styled from 'styled-components';
import { colors, highlights } from '../styles/colors';
import {TooltipContext} from '../context/global/tooltipContext';

type Props = {
    description: string,
    ref: HTMLElement,
    active: boolean,
    exception?: boolean,
}

type Return = React.ReactNode | null;

type Quadrant = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

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

    const calculateQuadrants = (width: number, height: number, x: number, y:number): Quadrant => {
        //Calculate dimensions
        let halfWidth = width / 2;
        let halfHeight = height / 2;
        let topLeft = [[0, halfWidth],[0, halfHeight], "topLeft"]
        let topRight = [[halfWidth, width], [0, halfHeight], "topRight"];
        let bottomLeft = [[0, halfWidth],[halfHeight, height], "bottomLeft"];
        let bottomRight = [[halfWidth, width],[halfHeight, height], "bottomRight"];
        let dimensions = [topLeft, topRight, bottomLeft, bottomRight];

        //Determen the current object's place in the dimensions
        let quadrant = dimensions.filter((el) => {
            if(el[0][0] <= x && x < el[0][1]){
                if(el[1][0] <= y && y < el[1][1]){
                return true
                } else {
                return false
                }
            }
        })
        //@ts-ignore
        return quadrant[0][2]

    }

    const createToolTip = () => {
        const bounds = props.ref.getBoundingClientRect()
        const {height, width} = document.documentElement.getBoundingClientRect()
        let quadrant = calculateQuadrants(width, height, bounds.x, bounds.y);
        
        if(quadrant === "topLeft"){
            setTooltip(<ToolTipTopLeft top={bounds.y + bounds.height} left={bounds.x + bounds.width} ><p>{props.description}</p></ToolTipTopLeft>)
        } else if (quadrant === "topRight"){
            setTooltip(<ToolTipTopRight top={bounds.y + bounds.height} left={bounds.x}><p>{props.description}</p></ToolTipTopRight>)
        } else if(quadrant === "bottomLeft"){
            setTooltip(<ToolTipBottomLeft bottom={height - bounds.y} left={bounds.x + bounds.width}><p>{props.description}</p></ToolTipBottomLeft>)
        } else {
            setTooltip(<ToolTipBottomRight bottom={height - bounds.y} right={width - bounds.x}><p>{props.description}</p></ToolTipBottomRight>)
        }

    }

    if(showToolTip || props.exception){
        return tooltip;
    } else {
        return null;
    }

}


const Tooltip = styled.div`
    position: absolute;
    width: 150px;
    text-align: left;
    box-shadow: 0 0 20px 2px ${colors.one};
    border-radius: 5px;
    background-color: ${highlights.seven};

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

`

const ToolTipTopLeft = styled(Tooltip)<{top: number, left: number}>`
    top: ${props => props.top + "px"};
    left: ${props => props.left + "px"};
`

const ToolTipTopRight = styled(Tooltip)<{top: number, left: number}>`
    top: ${props => props.top + "px"};
    left: ${props => props.left - 150 + "px"};

`

const ToolTipBottomLeft = styled(Tooltip)<{bottom: number, left: number}>`
    bottom: ${props => props.bottom + "px"};
    left: ${props => props.left + "px"};
`

const ToolTipBottomRight = styled(Tooltip)<{bottom: number, right: number}>`
    bottom: ${props => props.bottom + "px"};
    right: ${props => props.right + "px"};
`