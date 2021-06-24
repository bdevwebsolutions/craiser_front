import {FormData} from './popup';

export const formatFormData = (formdata: FormData) => {
    let today = new Date().getTime() / 1000;
    let end = new Date(formdata.date).getTime() / 1000;
    let name = formdata.name;
    let description = formdata.description;
    let organization = formdata.organization;
    let deadline = Math.round(end - today);
    let minimumContribution = 0;
    let goal = parseFloat(formdata.goal)

    return {name, description, organization, deadline, minimumContribution, goal};
}