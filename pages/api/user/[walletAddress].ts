import { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';

//API CALL

/*

    Gets the current users data if exists.
    Otherwise create a basic user instance in the db.

*/
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    //get walletAddress from query
    const {walletAddress} = req.query; 

    //connect to database
    mongoose.connect('mongodb+srv://BDEVBjarne:Jackandjones2110@cluster0.owkkp.mongodb.net/public?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(err => {
        console.log(err);
    });

    //get usermodel
    let user = mongoose.model('User');

    //check if user exists in database
    let exists = await user.exists({walletAddress: walletAddress})

    //If the user exists
    if(exists){
        //get userdata
        let userData = await user.findOne({walletAddress: walletAddress}, (err, user) => {
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
        const userDoc = new user({
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