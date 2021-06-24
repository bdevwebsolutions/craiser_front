import { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';
import NextCors from 'nextjs-cors';
import {projectModel} from '../../../lib/models/project.model';
import {userModel} from '../../../lib/models/user.model';


//API CALL

/**

    * Gets the current projects data if exists.
    * Otherwise create a basic project instance in the db.
    * TODO: REFACTOR + .ENV FOR DB CONNECTION
*/




const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    //Get data from body    
    let {contractAddress, contractTitle, contractDescription, contractOrganization, walletAddress} = req.body;
    console.log(walletAddress)
    
    //capitalize for consistency
    //@ts-ignore
    contractAddress = contractAddress.toUpperCase();

    //connect to database
    mongoose.connect('mongodb+srv://BDEVBjarne:Jackandjones2110@cluster0.owkkp.mongodb.net/public?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => {
        console.log(err);
    });

    //check if project exists in database
    let exists = await projectModel.exists({contractAddress: contractAddress})

    //If the project exists
    if(exists){
        //get projectData
        let projectData = await projectModel.findOne({contractAddress: contractAddress}, (err, project) => {
            return project;
        })

        
        //close connection
        mongoose.connection.close();
            
        //Return project from api call
        res.json(projectData)



    } 
    //if project doesn't exist
    else {
        //New project
        const projectDoc = new projectModel({
            contractAddress: contractAddress,
            title: contractTitle,
            description: contractDescription,
            organization: contractOrganization,
            upvotes: 0,
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