import React, { ReactNode, Dispatch } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

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


const Container = styled.div<{show: boolean}>`

    visibility: ${props => props.show ? "visible" : "hidden"};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.oneTransparant};
    z-index: 100;

    display: grid;
    justify-content: center;
    align-items: center;

`

const Justify = styled.div`
    width: 500px;

    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 15px;

`

const Close = styled.button`
    background-color: ${colors.two};
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius:5px;
    
    :hover{
        font-weight: bold;
    }
`

const Content = styled.div`


`


export default Popup;