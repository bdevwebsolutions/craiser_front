import React from 'react'
import { useForm } from 'react-hook-form';
import {formatDate} from '../../../../../../util/dateFormat';
import {Form} from './styles';


export const ContractForm = ({onSubmit}) => {


    //DATE FOR FORM
    const TODAY = new Date();
    const NEXT_WEEK = new Date(TODAY.getTime() + (86400000 * 7));


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
        <textarea {...register('description', {required: true})}/>
        {errors.description && <span>This field is required</span>}


        <label>Deadline - minimum of 7 days</label>
        <input type="date" {...register('date', {min: formatDate(NEXT_WEEK.toDateString())})}/>
        {errors.date && <span>A deadline can only be in the future and has to be atleast longer than one week</span>}

        <label>Goal - In ETH</label>
        <input type="number" step="any" {...register('goal', {min: 0.000000001, required: true})}/>
        {errors.goal && <span>Required and has to be bigger than 0</span>}
        
        <input type="submit"/>
    </Form>)
}