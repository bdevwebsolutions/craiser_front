import mongoose from 'mongoose';
const {Schema} = mongoose;


//Initiate a mongodb connection with mongoose and define all models

//MODELS
const projectSchema = new Schema({
    contractAddress: String,
    title: String,
    description: String,
    links: [{type: String}],
    upvotes: Number,
})

const userSchema = new Schema({
    walletAddress: {
        type: String,
        required: true,
    },
    projects: {
        type: [projectSchema],
        required: false,
    },
    upvotes: {
        type: [{type: String}],
        required: false,
    },
    following: {
        type: [{type: String}],
        required: false,
    },
    funding: {
        type: [{type: String}],
        required: false,
    },
})

//initiate models
mongoose.model('Project', projectSchema);
mongoose.model('User', userSchema);



