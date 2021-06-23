import styled from "styled-components"
import { colors } from "../../../../../../styles/colors"


export const Form = styled.form`

    input,label,textarea{
        display: block;
        width: 100%;
        padding: 5px;
    }

    input, textarea{
        background-color: ${colors.three};
        border: solid 2px ${colors.four};
    }

    input[type="submit"]{
        margin-top: 15px;
        cursor: pointer;
        :hover{
            font-weight: bold;
        }
    }

    label{
        margin-top: 15px !important;
        padding: 0px !important;
        font-weight: bold;
        font-size: 14px;
    }

    span{
        font-size: 13px;
        color: red;
    }

    input:focus{
        font-weight: bold;
    }

    textarea{
        max-width: 100%;
        min-width: 100%;
        height: 200px;
    }

`