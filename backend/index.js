const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const connectToDB = require('./config/db.js')
const urls = require('./models/urlschema.js')
const randomstring = require('randomstring')


dotenv.config()
connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.status(200).json({message: "evrything works fine"})
})


app.post('/newurl',async(req,res)=>{
    let {originalURL} = req.body;
    if(!originalURL){
        return res.status(411).json({message: "url is required"})
    }
    let shortid = randomstring.generate({
        length: 5,
        charset: 'alphanumeric'
      });
    shortid = shortid.toLowerCase()

    try {
        let newURL = await urls.create({
            originalURL,
            shortid
        })
        res.status(201).json({newURL})
    } catch (error) {
        return res.status(501).json({message: "something went wrong"})
    }

})

app.get('/short/:shortid',async(req,res)=>{
    let {shortid} = req.params;
    shortid = shortid.toLowerCase()
    let exist = await urls.findOne({shortid})
    if(!exist){
        return res.json({message: "Error 404 NOT FOUND....."})
    }
    return res.status(200).json({url: exist.originalURL})
})





let port = process.env.PORT ||  3000;

app.listen(port,()=>{
    console.log(`app is listening to port: ${port}`)
})
