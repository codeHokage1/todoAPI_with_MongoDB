const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3007;
const todoRouter = require('./routes/todoRoutes')
const connectDb = require('./config/dbConfig');

const app = express();
app.use(express.json())

connectDb();

app.get('/', (req, res) => {
    res.send("Hello there! This is a Todo API")
})
app.use('/todos', todoRouter)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, (req, res) => {
        console.log(`Server running on PORT: ${PORT}`);
    })
})