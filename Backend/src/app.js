const express = require('express')
const userrouter = require('../src/routes/note.route')
const cors = require("cors")




const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api' , userrouter);





module.exports = app;