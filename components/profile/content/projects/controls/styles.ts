import styled from 'styled-components';
import { colors } from '../../../../../styles/colors';
import Popup from 'reactjs-popup';
//LIST
export const ListContainer = styled.div`
    
    display: grid;
    grid-template-rows: 1fr 40px;
    height: 100%;
    border: solid 2px ${colors.two};
    

    p{
        align-self: center;
        text-align: center;
        opacity: 0.6;
        font-size: 12px;
    }

    button{
        background-color: ${colors.two};
        border: solid 1px ${colors.two};
        cursor: pointer;
        :hover{
            border: solid 1px ${colors.three};
            background-color: ${colors.three};
            font-weight: bold;
        }
    }

    ul{
        list-style-type: none;
        overflow: hidden;
        padding: 0px;
        font-size: 12px;
        width: 100%;
        word-wrap: break-word;

        li{
            padding: 10px;
            cursor: pointer;
        }

        li:nth-child(even){
            background-color: ${colors.three};
        }
    }

`
//DETAILS
export const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
    div{
        height: 100%;
        width: 100%;
        background-color: ${colors.two};
        padding: 15px;

        h3{
            
            margin-bottom: 5px;
            opacity: 0.4;
        }

        p{
            opacity: 0.8;
            font-size: 13px;
        }

        h4{
            font-size: 15px;
        }
    }
`

export const Funds = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
`

export const Contributers = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
`

export const Time = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;
`
export const Approval = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;
`

export const Description = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
`

export const Center = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
`

//POPUP

export const StyledPopup = styled(Popup)`

    // use your custom style for ".popup-overlay"
    &-overlay {
        background-color: ${colors.oneTransparant};
        cursor: pointer;
    }
    // use your custom style for ".popup-content"
    &-content {
        cursor: default;
        background-color: ${colors.two};
        padding: 15px;
        height: auto;
        width: 100%;
        max-width: 800px;

        div{
            min-height: 100%;
            padding: 15px;

            button{
                display: block;
                width: 100%;
                margin-top: 15px;
                padding: 10px;
                background-color: ${colors.three};
                border: solid 2px ${colors.four};
                cursor: pointer;
                :hover{
                    font-weight: bold;
                }
            }            
        }
    }

`
