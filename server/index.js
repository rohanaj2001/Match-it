const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const homeroute = require('./routes/home.js')
const mongoose = require('mongoose');
const shirts = require('./models/shirtSchema.js');

app.use(cors())

const CONNECTION_URL = 'mongodb+srv://rohanaj:roni1234@cluster0.jrzuf.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', homeroute)
app.get('/matches', async function (req, res, next) {
    var a, b
    const shirt =await shirts.findOne({used: 'false' })
        if(shirt)
        {
            shirts.findOneAndUpdate({used:'false'},{used:'true'}, async function (req,res){

                a=await res.shirtColor
                b=await res.shirtComplementaryColor
            })
        setTimeout(() => {
            const data = {
                "shirtColor": a,
                "shirtComplementaryColor": b
            }
            res.send(data)
        }, 2000)
    
        }
        else{
            console.log("please re-upload the shirt image");
            res.send({status:'error', shirt:'not saved'})
        }
    })


const port = process.env.PORT || 5000
try {
    mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(app.listen(port))
        .then(console.log("connection successful"))
} catch {
    console.log("connectiom unsuccessful");
}

console.log(port);