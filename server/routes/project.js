const express = require('express');
const { Project } = require('../model/projectModel');
// const { v4: uuidv4 } = require('uuid');
// const { handleErrorMessage } = require('../util');
const router = express.Router();
// const Todo = require('../models/todoModel')





// ----------get all projects-----------
router.get('/all', async (req, res) => {
    try {
        const data = await Project.find();
        res.json(data)
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// ----------- get individual project ------------
router.get('/', async (req, res) => {

    try {
        const { _id } = req.query;
        const response = await Project.findById(_id)
        res.json(response);

    } catch (error) {
        res.status(400).json({
            message: error
        })

    }
})


// --------- create new project -----------------
router.post('/', async (req, res) => {

    try {
        const { projectName, description, task, status } = req.body;

        const response = await Project.create({ projectName, description, task, status });
        res.json(response)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})


// -------------- update existing project ------------
router.put('/', async (req, res) => {
    try {
        const { _id, projectName, description, task, status } = req.body;
        const response = await Project.findByIdAndUpdate(_id, { projectName, description, task, status },
            { new: true }
        );
        res.json(response);


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})



// ------------------ delete individual project ----------------
router.delete('/', async (req, res) => {
    try {
        const { _id } = req.body;
        const response = await Project.findByIdAndDelete(_id);
        res.json(response)


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})



module.exports = router;   