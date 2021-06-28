const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    contractAddress: String,
    title: String,
    description: String,
    organization: String,
    upvotes: Number,
    goal: Number,
    donated: Number,
    completeness: Number,

}, {timestamps: true})

let projectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);
export {projectModel, projectSchema};