import { NextApiRequest, NextApiResponse } from "next";
import mongoose, { mongo } from 'mongoose';
import NextCors from 'nextjs-cors';
import {projectModel} from '../../../lib/models/project.model';
import { userModel } from "../../../lib/models/user.model";


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

    //CONNECT TO DB
    //connect to database
    mongoose.connect(process.env.MONGO_DB_KEY,  {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => {
        console.log(err);
    });


    //SPLIT INTO GET AND POST

    if(req.method === "GET"){
        //check if project exists in database
        let exists = await projectModel.exists({contractAddress: contractAddress})
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
            mongoose.connection.close();
            res.json({});
        }
    }

    if(req.method === "POST"){
        let {contractTitle, contractDescription, contractOrganization, walletAddress} = req.body;
        const projectDoc = new projectModel({
            contractAddress: contractAddress,
            title: contractTitle,
            description: contractDescription,
            organization: contractOrganization,
        })

        //Save project
        await projectDoc.save();

        //Save project address to user
        const user = await userModel.findOne({walletAddress: walletAddress})
        user.projects.push(contractAddress);
        
        let returnValue = await user.save().then(res => {
            return res;
        }).catch(err => {
            console.log(err)
        });


        //close connection
        mongoose.connection.close();
        
        res.json(returnValue);
    }



    
}


export default handler;