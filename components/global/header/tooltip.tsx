import React from 'react'
import styled from 'styled-components';


import { colors } from '../../../styles/colors';
import {AiFillQuestionCircle, AiOutlineQuestionCircle} from 'react-icons/ai';
import { TooltipContext } from '../../../context/global/tooltipContext';
import { useTooltip } from '../../../hooks/useTooltip';




const Tooltip: React.FC = () => {

    //TOOLTIP SETTINGS AND BUTTON
    const {showToolTip, setShowToolTip} = React.useContext(TooltipContext);
    const [activateTooltop, setActivateTooltip] = React.useState(false);
    const [description, setDescription] = React.useState("Deactivate tooltips.");
    const pRef = React.useRef(null);
    const tooltip = useTooltip({description, active: activateTooltop, ref: pRef.current, exception: true})

    React.useEffect(() => {
        if(showToolTip){
            setDescription("Deactivate tooltips.");
        } else {
            setDescription("Activate tooltips.");
        }
    }, [showToolTip])

    return (
    <Container>
        {tooltip}
        <p ref={pRef} onMouseEnter={() => {setActivateTooltip(true)}} onMouseLeave={() => {setActivateTooltip(false)}} onClick={() => {setShowToolTip(!showToolTip)}}>{showToolTip ? <AiFillQuestionCircle/> : <AiOutlineQuestionCircle/>}</p>
    </Container>
    )
}

const Container = styled.div`

    height: 20px;
    width: 50px;
    background-color: none;
    font-size: 18px;
    text-align: right;
    padding: 0px 15px;
    color: ${colors.eight};
    position: absolute;
    top: 0px;
    left: 0px;
    svg{
        fill: ${colors.five};
    }

    p{
        cursor: pointer;
        display: inline-block;
    }

    @media only screen and (max-width: 1050px){
        display: none;
    }
`

export default Tooltip;