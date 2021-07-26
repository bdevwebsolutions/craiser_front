import React from 'react'
import { useForm } from 'react-hook-form';
import {formatDate} from '../../../../../../util/dateFormat';
import Tiptap from '../wysiwyg';
import styled from "styled-components"
import { colors, highlights } from "../../../../../../styles/colors"
/** 
--- FUNDRAISER CONTRACT FORM -----------------------

    @param: onSubmit => Submithandler past by parent component

-------------------------------------------------------------------
*/


export const ContractForm = ({onSubmit}) => {


    //DATE FOR FORM
    const TODAY = new Date();
    const NEXT_WEEK = new Date(TODAY.getTime() + (86400000 * 7));
    const [length, setLength] = React.useState(0);


    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Project Name</label>
            <input {...register('name', {required: true})} />
            {errors.name && <span>This field is required</span>}

            <label>Organization Name</label>
            <input {...register('organization', {required: true})}/>
            {errors.organization && <span>This field is required</span>}

            <label>Project Description</label>
            <Tiptap/>
            <label>Deadline - minimum of 7 days</label>
            <input type="date" {...register('date', {min: formatDate(NEXT_WEEK.toDateString())})}/>
            {errors.date && <span>A deadline can only be in the future and has to be atleast longer than one week</span>}

            <label>Goal - In ETH</label>
            <input type="number" step="any" {...register('goal', {min: 0.000000001, required: true})}/>
            {errors.goal && <span>Required and has to be bigger than 0</span>}
            
            <input type="submit"/>
        </Form>
    )
}

const Form = styled.form`


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
        color: ${highlights.seven};
    }

    input:focus{
        font-weight: bold;
        outline: none;
        border: solid 1px ${highlights.seven};
    }

    textarea{
        max-width: 100%;
        min-width: 100%;
        height: 200px;
    }
    textarea:focus{
        font-weight: bold;
        outline: none;
        border: solid 1px ${highlights.seven};
    }


`