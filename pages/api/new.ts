import { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';
import NextCors from 'nextjs-cors';
import {projectModel }from '../../lib/models/project.model';

//API CALL

/** 

    * Gets the current users data if exists.
    * Otherwise create a basic user instance in the db.
    * TODO: REFACTOR + .ENV FOR DB CONNECTION

*/




const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    mongoose.connect('mongodb+srv://BDEVBjarne:Jackandjones2110@cluster0.owkkp.mongodb.net/public?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => {
        console.log(err);
    });

    let data = await projectModel.find({}).sort({createdAt: -1}).then(res => {
        return res;
    }).catch(err => {
        console.log(err)
    })

    mongoose.disconnect();
    
    if(data){
        res.json(data)
    } else {
        res.json('NO PROJECTS FOUND');
    }

}

export default handler;