const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    contractAddress: String,
    title: String,
    description: String,
    organization: String,
    upvotes: Number,
})

let projectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);
export {projectModel, projectSchema};