import styled from 'styled-components';
import { colors, highlights } from '../../../../../../../../styles/colors';
import Popup from 'reactjs-popup';
//LIST
export const ListContainer = styled.div`
    
    display: grid;
    grid-template-rows: 1fr 40px;
    height: 100%;
    
    

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
            background-color: ${highlights.seven};
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

            :hover{
                border: solid 1px ${highlights.seven};
                padding: 9px;
            }

            :focus{
                background-color: ${highlights.seven};
                font-weight: bold;
            }
        }

        li:nth-child(even){
            background-color: ${colors.three};
            :focus{
                background-color: ${highlights.seven};
            }
        }
    }


    @media only screen and (max-width: 1100px){
        width: 100%;
        ul{
            overflow-y: scroll;
            
        }
    }

`
