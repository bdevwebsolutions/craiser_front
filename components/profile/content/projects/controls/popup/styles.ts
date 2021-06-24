import Popup from "reactjs-popup";
import styled from "styled-components";
import { colors, highlights } from "../../../../../../styles/colors";

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
                    background-color: ${highlights.seven};
                }
            }            
        }
    }

`
