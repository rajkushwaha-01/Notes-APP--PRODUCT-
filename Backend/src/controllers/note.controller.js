const userModel = require('../models/note.model')


const notes = async (req , res) =>{
    const {title ,description } = req.body

    const note = await userModel.create({
        title , description
    })

    res.status(201).json({
        message:"note created"
    })
}



const getnotes = async (req , res)=>{
    const allNotes = await userModel.find()

    return res.status(200).json({
        message:"note fatch successfully",
        allNotes
    })
}

const delnotes = async (req , res)=>{
    const { id } = req.params  

    const deletedNote = await userModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully"
    })

}


module.exports = {notes , getnotes ,delnotes};


