const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const taskRouter = require('./router/taskRoute')

connectDB();
const app = express(); 
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));


// Setting ports
const port = process.env.PORT || 5000


// HomePage
app.get('/', (req, res) => {
    res.json('Welcome to Task Manager Application')
});

app.use('/tasks', taskRouter)


app.listen(port, () => console.log(`Server
is running on port ${port}`))