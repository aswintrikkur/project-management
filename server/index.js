const express = require('express');
const cors = require('cors');
const projectRoute = require("./routes/project");
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());


connectDB();

const port = process.env.PORT || 5500;
const server = process.env.SERVER_URL || `http://localhost:${port}`
app.listen(port, () => {
    console.log(`----- server started on  : ${server}`);
})

// -----------routes-------------
app.use('/api/project', projectRoute );


app.all('*', (req, res) => {
    res.json(`API does not exist`);
})
