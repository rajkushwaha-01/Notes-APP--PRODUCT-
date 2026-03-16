const express = require('express')
const {notes,getnotes , delnotes} = require('../controllers/note.controller')


const userrouter = express.Router()



userrouter.post('/notes' , notes )

userrouter.get('/notes' , getnotes)

userrouter.delete('/notes/:id' , delnotes )

module.exports = userrouter;