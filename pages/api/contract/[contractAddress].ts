import { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';
import NextCors from 'nextjs-cors';
import {projectModel} from '../../../lib/models/project.model';


//API CALL

/**

    * Gets the current projects data if exists.
    * Otherwise create a basic project instance in the db.
    * TODO: REFACTOR 
*/




const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    //Get data from body and query
    let {contractAddress} = req.query;
    
    //capitalize for consistency
    //@ts-ignore
    contractAddress = contractAddress.toUpperCase();

    //connect to database
    mongoose.connect(process.env.MONGO_DB_KEY,  {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => {
        console.log(err);
    });

    //check if project exists in database
    let exists = await projectModel.exists({contractAddress: contractAddress})

    console.log(exists)

    //If the project exists
    if(exists){
        let projectData = await projectModel.findOne({contractAddress: contractAddress}, (err, project) => {
            return project;
        })

        
        //close connection
        mongoose.connection.close();
            
        //Return project from api call
        res.json(projectData)


    } else {
        res.json({});
    }
    
}


export default handler;