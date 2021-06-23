import { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';
import NextCors from 'nextjs-cors';
import {userModel} from '../../../lib/models/user.model';

//API CALL

/*

    Gets the current users data if exists.
    Otherwise create a basic user instance in the db.

*/


// TODO: REFACTOR

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    //get walletAddress from query
    let {walletAddress} = req.query;
    
    //capitalize for consistency
    //@ts-ignore
    walletAddress = walletAddress.toUpperCase();

    //connect to database
    mongoose.connect('mongodb+srv://BDEVBjarne:Jackandjones2110@cluster0.owkkp.mongodb.net/public?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => {
        console.log(err);
    });

    //check if user exists in database
    let exists = await userModel.exists({walletAddress: walletAddress})

    //If the user exists
    if(exists){
        //get userdata
        let userData = await userModel.findOne({walletAddress: walletAddress}, (err, user) => {
            return user;
        })

        //Return user from api call
        res.json(userData)

        //close connection
        mongoose.connection.close();

    } 
    //if user doesn't exist
    else {
        //New user
        const userDoc = new userModel({
            walletAddress: walletAddress,
        })

        //Save user
        await userDoc.save();

        //Return user from api call
        res.json(userDoc);

        //close connection
        mongoose.connection.close();
    }



    
}

export default handler;