 const mongoose = require('mongoose')

 const urlSchema = new mongoose.Schema({
    originalURL: {
        required:true,
        type: String
    },
    shortid: {
        required:true,
        type: String
    }
 })

 module.exports = mongoose.model("urls",urlSchema)