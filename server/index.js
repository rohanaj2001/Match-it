const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const homeroute = require('./routes/home.js')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', homeroute)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log("listening to port ", port);
})