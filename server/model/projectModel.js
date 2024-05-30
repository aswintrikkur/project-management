const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(     // schema will check when we add data to database
    {
        projectName: {
            type: String,
            required: true  // by default it is false.
        },
        description: String,
        task: {
            // type: [String],
            default:undefined,
            type:Array

        },
        status: {
            type: String,
            enum: ['complete','pending']
        }
        // isComplete: {
        //     type: Boolean,
        //     required: [true, ' isComplete is required ---- this is a custom errorMessage from DB']
        // },
        // isEditable: Boolean,
        // errorMessage: {
        //     type: [Boolean | String]    // a field with mixed dataType. not recommend
        // }
    },
    // { strict: false }
);

module.exports = { Project: mongoose.model('Project', projectSchema) };