const express = require('express')
const userrouter = require('../src/routes/note.route')


const app = express()


app.use(express.json());

app.use('/api' , userrouter);




module.exports = app;