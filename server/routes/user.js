const express = require('express');
// const { checkAuth } = require('../middleware/checkAuth');
const { Users } = require('../model/userModel');
const { generatePasswordHash, comparePasswordHash } = require('../utils/bcrypt');


const router = express.Router();

//======= signup =========
router.post('/signup', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        //store user in DB
        const hashedPassword = await generatePasswordHash(password);
        const dbResponse = await Users.create({ username, email, password: hashedPassword });
        res.status(200).json({
            message: 'user register successful'
        });
        res.json(dbResponse)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})



//------------ user log-in --------------------
router.post('/login', async (req, res, next) => {

    try {
        const { email, password } = req.body;

        console.log(email, password);

        const userData = await Users.findOne({ email });
        console.log(userData,'=====userData');

        //compare password
        const isPasswordValid = await comparePasswordHash(password, userData.password)
        if (isPasswordValid) {

            const accessToken = generateAccessToken(userData._id);
            return res.status(200).json({ user: userData.essentials, accessToken });
        }

       return res.status(400).json({
            message: 'invalid email or password'
        });

    } catch (error) {

        next(error);

    }
});



module.exports = { userRoute: router }