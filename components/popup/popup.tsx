import React, { ReactNode, Dispatch } from 'react'


//Styled-components
import {Container, Justify, Content, Close} from './styles';

type Props = {
    children: ReactNode,
    active: boolean,
    setActive: Dispatch<boolean>
}

const Popup: React.FC<Props> = ({active, children, setActive}) => {

    return (
    <Container show={active}>
        <Justify>
            <Content>
                {children}
            </Content>
            <Close onClick={() => {setActive(false)}}>CLOSE</Close>
        </Justify>
    </Container>
    )

}




export default Popup;