const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
url = process.env.URL
const {OAuth2Client} = require("google-auth-library")

const client = new OAuth2Client("67785708010-333mg0af8hhoba5dsiddgbdr8ob2urcn.apps.googleusercontent.com")



const app = express()

app.use(express.json())

const connect = () => {
    return mongoose.connect(url)
}

app.post("/googlelogin",googlelogin);

const googlelogin = (req,res)=>{
    const {tokenId} = req.body;

    client.verifyIdToken({tokenId,audience:"67785708010-333mg0af8hhoba5dsiddgbdr8ob2urcn.apps.googleusercontent.com"}).then(response =>{
        const {email_verified,name,email} = response.payload
        if(email_verified){
            User.findOne({email}).exec((err,user)=>{
                if(err){
                    return res.status(400).json({
                        error:"Someting went wrong.."
                    })
                }
                else{
                    if(user){
                        const token = jwt.sign({_id:user._id})
                    }
                    else{

                    }
                }
            })
        }
    })
}



app.listen(5000, async() =>{

    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }

    console.log("listening on port 5000")
})