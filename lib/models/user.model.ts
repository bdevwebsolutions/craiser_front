const mongoose = require('mongoose');
const {projectSchema} = require('./project.model');

const userSchema = new mongoose.Schema({
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

const userModel = mongoose.models.User || mongoose.model('User', userSchema);
export {userModel, userSchema};