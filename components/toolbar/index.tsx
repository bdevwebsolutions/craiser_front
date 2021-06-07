import React from 'react'
import { Container } from './styles'
import {AiFillQuestionCircle, AiOutlineQuestionCircle} from 'react-icons/ai';
import { TooltipContext } from '../../context/tooltipContext';
import { useTooltip } from '../../hooks/useTooltip';




const ToolBar: React.FC = () => {

    const {showToolTip, setShowToolTip} = React.useContext(TooltipContext);
    const [activateTooltop, setActivateTooltip] = React.useState(false);
    const [description, setDescription] = React.useState("Clicking this button will deactivate tooltips on the site");
    const pRef = React.useRef(null);
    const tooltip = useTooltip({description, active: activateTooltop, ref: pRef.current, exception: true})

    React.useEffect(() => {
        if(showToolTip){
            setDescription("Clicking this button will deactivate tooltips on the site");
        } else {
            setDescription("Clicking this button will activate tooltis on the site");
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