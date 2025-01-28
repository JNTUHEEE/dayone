const mongoose = require('mongoose')


const connectToDB = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`db is conncted`)
    }).catch((err)=>{
        console.log(`the error is: ${err}`)
    })
}

module.exports = connectToDB