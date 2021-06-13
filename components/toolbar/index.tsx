import React from 'react'
import { Container } from './styles'
import {AiFillQuestionCircle, AiOutlineQuestionCircle} from 'react-icons/ai';
import { TooltipContext } from '../../context/tooltipContext';
import { useTooltip } from '../../hooks/useTooltip';




const ToolBar: React.FC = () => {

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

export default ToolBar;